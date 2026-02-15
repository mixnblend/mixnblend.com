import { describe, it, expect } from 'vitest';
import { truncateText } from '../../src/utils/truncateText';

describe('truncateText', () => {
  it('should return original text if shorter than max length', () => {
    // Given: I have text shorter than the max length
    const text = 'Short text';

    // When: I truncate the text with max length 20
    const result = truncateText(text, 20);

    // Then: I should receive the original text unchanged
    expect(result).toBe('Short text');
  });

  it('should truncate text longer than max length', () => {
    // Given: I have text longer than the max length
    const text = 'This is a very long text that needs to be truncated';

    // When: I truncate the text with max length 20
    const result = truncateText(text, 20);

    // Then: I should receive truncated text with ellipsis
    expect(result).toBe('This is a very lo...');
  });

  it('should use custom suffix when provided', () => {
    // Given: I have text that needs truncating
    const text = 'This is a long text';

    // When: I truncate the text with a custom suffix
    const result = truncateText(text, 10, '…');

    // Then: I should receive text with the custom suffix
    expect(result).toBe('This is a…');
  });

  it('should trim whitespace before adding suffix', () => {
    // Given: I have text that will be truncated mid-word
    const text = 'Text with spaces';

    // When: I truncate the text
    const result = truncateText(text, 10);

    // Then: I should receive trimmed text with suffix
    expect(result).toBe('Text wi...');
  });

  it('should handle exact length match', () => {
    // Given: I have text exactly matching the max length
    const text = 'Exactly';

    // When: I truncate the text with length 7
    const result = truncateText(text, 7);

    // Then: I should receive the original text
    expect(result).toBe('Exactly');
  });
});
