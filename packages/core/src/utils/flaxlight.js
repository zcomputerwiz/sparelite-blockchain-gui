import Big from 'big.js';
import units from './units';

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Flax {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const flaxlight_formatter = (value, unit) => new Flax(value, unit);

flaxlight_formatter.convert = convert;
flaxlight_formatter.setDisplay = units.setDisplay;
flaxlight_formatter.setUnit = units.setUnit;
flaxlight_formatter.getUnit = units.getUnit;
flaxlight_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const mojo_to_flaxlight = (mojo) => {
  return flaxlight_formatter(Number.parseInt(mojo), 'mojo').to('flaxlight').value();
};

export const flaxlight_to_mojo = (flaxlight) => {
  return flaxlight_formatter(Number.parseFloat(Number(flaxlight)), 'flaxlight')
    .to('mojo')
    .value();
};

export const mojo_to_flaxlight_string = (mojo) => {
  return flaxlight_formatter(Number(mojo), 'mojo').to('flaxlight').toString();
};

export const mojo_to_colouredcoin = (mojo) => {
  return flaxlight_formatter(Number.parseInt(mojo), 'mojo')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_mojo = (colouredcoin) => {
  return flaxlight_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('mojo')
    .value();
};

export const mojo_to_colouredcoin_string = (mojo) => {
  return flaxlight_formatter(Number(mojo), 'mojo').to('colouredcoin').toString();
};
