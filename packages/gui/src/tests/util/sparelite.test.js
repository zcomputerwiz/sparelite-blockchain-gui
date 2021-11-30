const sparelite = require('../../util/sparelite');

describe('sparelite', () => {
  it('converts number mojo to sparelite', () => {
    const result = sparelite.mojo_to_sparelite(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to sparelite', () => {
    const result = sparelite.mojo_to_sparelite('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to sparelite string', () => {
    const result = sparelite.mojo_to_sparelite_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to sparelite string', () => {
    const result = sparelite.mojo_to_sparelite_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number sparelite to mojo', () => {
    const result = sparelite.sparelite_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string sparelite to mojo', () => {
    const result = sparelite.sparelite_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = sparelite.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = sparelite.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = sparelite.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = sparelite.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = sparelite.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = sparelite.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
