import { describe, it, expect } from 'vitest';
import { sortByDate } from '../../src/utils/sortByDate';

describe('sortByDate', () => {
  const mockItems = [
    { data: { publishDate: new Date('2024-01-15') } },
    { data: { publishDate: new Date('2024-03-20') } },
    { data: { publishDate: new Date('2024-02-10') } },
  ];

  it('should sort items by date in descending order by default', () => {
    // Given: I have an array of items with publish dates
    const items = mockItems;

    // When: I sort the items by date
    const sorted = sortByDate(items);

    // Then: I should receive items in descending order (newest first)
    expect(sorted[0].data.publishDate?.toISOString()).toBe(new Date('2024-03-20').toISOString());
    expect(sorted[1].data.publishDate?.toISOString()).toBe(new Date('2024-02-10').toISOString());
    expect(sorted[2].data.publishDate?.toISOString()).toBe(new Date('2024-01-15').toISOString());
  });

  it('should sort items by date in ascending order when specified', () => {
    // Given: I have an array of items with publish dates
    const items = mockItems;

    // When: I sort the items by date in ascending order
    const sorted = sortByDate(items, 'asc');

    // Then: I should receive items in ascending order (oldest first)
    expect(sorted[0].data.publishDate?.toISOString()).toBe(new Date('2024-01-15').toISOString());
    expect(sorted[1].data.publishDate?.toISOString()).toBe(new Date('2024-02-10').toISOString());
    expect(sorted[2].data.publishDate?.toISOString()).toBe(new Date('2024-03-20').toISOString());
  });

  it('should handle items with releaseDate instead of publishDate', () => {
    // Given: I have items with releaseDate instead of publishDate
    const items = [
      { data: { releaseDate: new Date('2024-01-15') } },
      { data: { releaseDate: new Date('2024-03-20') } },
    ];

    // When: I sort the items by date
    const sorted = sortByDate(items);

    // Then: I should receive items sorted by releaseDate
    expect(sorted[0].data.releaseDate?.toISOString()).toBe(new Date('2024-03-20').toISOString());
  });

  it('should handle items with no dates', () => {
    // Given: I have items where some have no dates
    const items = [{ data: {} }, { data: { publishDate: new Date('2024-01-15') } }];

    // When: I sort the items by date
    const sorted = sortByDate(items);

    // Then: I should receive items with dates first
    expect(sorted[0].data.publishDate?.toISOString()).toBe(new Date('2024-01-15').toISOString());
  });
});
