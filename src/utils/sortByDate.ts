export function sortByDate<T extends { data: { publishDate?: Date; releaseDate?: Date } }>(
  items: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] {
  return items.sort((a, b) => {
    const dateA = (a.data.publishDate || a.data.releaseDate)?.getTime() || 0;
    const dateB = (b.data.publishDate || b.data.releaseDate)?.getTime() || 0;

    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
}
