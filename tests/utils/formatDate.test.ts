import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/utils/formatDate';

describe('formatDate', () => {
  it('should format a date correctly', () => {
    // Given: I have a date object for January 15, 2024
    const date = new Date('2024-01-15');

    // When: I format the date
    const formatted = formatDate(date);

    // Then: I should receive a human-readable string
    expect(formatted).toBe('January 15, 2024');
  });

  it('should handle different dates', () => {
    // Given: I have a date object for December 25, 2023
    const date = new Date('2023-12-25');

    // When: I format the date
    const formatted = formatDate(date);

    // Then: I should receive the correct formatted string
    expect(formatted).toBe('December 25, 2023');
  });
});
