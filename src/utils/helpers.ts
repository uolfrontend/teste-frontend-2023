export function filterObjectsBySubstring(
  objects: any,
  key: string,
  substring: string
) {
  return objects.filter((obj: any) =>
    obj[key].toLowerCase().includes(substring.toLowerCase())
  );
}
