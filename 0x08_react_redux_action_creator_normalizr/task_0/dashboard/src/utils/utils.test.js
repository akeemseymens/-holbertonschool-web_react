import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

const currentYear = 2022

describe('getFullYear()', () => {
  it('should return the correct current year', () => {
    expect(getFullYear()).toBe(currentYear);
  })
});

describe('getFooterCopy()', () => {
  it('getFooterCopy(true) should return "Holberton School"', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  })
  it('getFooterCopy(false) should return "Holberton School main dashboard"', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })
});

describe('getLatestNotification()', () => {
  it('should return "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  })
});
