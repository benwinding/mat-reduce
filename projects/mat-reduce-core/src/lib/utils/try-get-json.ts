export function tryGetJsonString(doc: any): string {
  try {
    const json = JSON.stringify(doc);
    return json;
  } catch (error) {
    return null;
  }
}
