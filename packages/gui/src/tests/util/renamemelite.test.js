const renamemelite = require('../../util/renamemelite');

describe('renamemelite', () => {
  it('converts number mojo to renamemelite', () => {
    const result = renamemelite.mojo_to_renamemelite(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to renamemelite', () => {
    const result = renamemelite.mojo_to_renamemelite('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to renamemelite string', () => {
    const result = renamemelite.mojo_to_renamemelite_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to renamemelite string', () => {
    const result = renamemelite.mojo_to_renamemelite_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number renamemelite to mojo', () => {
    const result = renamemelite.renamemelite_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string renamemelite to mojo', () => {
    const result = renamemelite.renamemelite_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = renamemelite.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = renamemelite.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = renamemelite.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = renamemelite.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = renamemelite.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = renamemelite.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
