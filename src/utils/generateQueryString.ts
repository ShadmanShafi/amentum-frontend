export const generateQueryString = (
  query: Record<string, string | number | boolean | undefined>
): string => {
  const queryParams = [];

  for (const key in query) {
    if (
      Object.prototype.hasOwnProperty.call(query, key) &&
      query[key] !== undefined &&
      query[key] !== null
    ) {
      const value = query[key];
      if (value !== undefined) {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        );
      }
    }
  }

  return queryParams.length ? `?${queryParams.join('&')}` : '';
};
