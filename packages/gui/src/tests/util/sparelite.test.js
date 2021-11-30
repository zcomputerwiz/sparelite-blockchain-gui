const sparelite = require('../../util/sparelite');

describe('sparelite', () => {
  it('converts number graviton to sparelite', () => {
    const result = sparelite.graviton_to_sparelite(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string graviton to sparelite', () => {
    const result = sparelite.graviton_to_sparelite('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number graviton to sparelite string', () => {
    const result = sparelite.graviton_to_sparelite_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string graviton to sparelite string', () => {
    const result = sparelite.graviton_to_sparelite_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number sparelite to graviton', () => {
    const result = sparelite.spare_to_graviton(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string sparelite to graviton', () => {
    const result = sparelite.spare_to_graviton('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number graviton to colouredcoin', () => {
    const result = sparelite.graviton_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string graviton to colouredcoin', () => {
    const result = sparelite.graviton_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number graviton to colouredcoin string', () => {
    const result = sparelite.graviton_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string graviton to colouredcoin string', () => {
    const result = sparelite.graviton_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to graviton', () => {
    const result = sparelite.colouredcoin_to_graviton(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to graviton', () => {
    const result = sparelite.colouredcoin_to_graviton('1000');

    expect(result).toBe(1000000);
  });
});
