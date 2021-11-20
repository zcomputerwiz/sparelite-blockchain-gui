const flaxlight = require('../../util/flaxlight');

describe('flaxlight', () => {
  it('converts number mojo to flaxlight', () => {
    const result = flaxlight.mojo_to_flaxlight(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to flaxlight', () => {
    const result = flaxlight.mojo_to_flaxlight('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to flaxlight string', () => {
    const result = flaxlight.mojo_to_flaxlight_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to flaxlight string', () => {
    const result = flaxlight.mojo_to_flaxlight_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number flaxlight to mojo', () => {
    const result = flaxlight.flaxlight_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string flaxlight to mojo', () => {
    const result = flaxlight.flaxlight_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = flaxlight.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = flaxlight.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = flaxlight.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = flaxlight.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = flaxlight.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = flaxlight.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
