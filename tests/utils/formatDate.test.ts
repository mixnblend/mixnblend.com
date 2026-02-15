import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/utils/formatDate';

describe('formatDate', () => {
  it('should format a date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toBe('January 15, 2024');
  });

  it('should handle different dates', () => {
    const date = new Date('2023-12-25');
    const formatted = formatDate(date);
    expect(formatted).toBe('December 25, 2023');
  });
});
