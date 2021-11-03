export function doesTextMatch(text1: string, text2: string): boolean {
  if (!text1 && !text2) {
    return true;
  }
  const text1Safe = text1 + '';
  const text2Safe = text2 + '';
  const matches = text1Safe.toLowerCase().trim() === text2Safe.toLowerCase().trim();
  return matches;
}

export function isIncluded(parentStr: string, subStr: string): boolean {
  if (!parentStr && !subStr) {
    return true;
  }
  const parentStrSafe = parentStr + '';
  const subStrSafe = subStr + '';
  const matches = parentStrSafe
    .toLowerCase()
    .includes(subStrSafe.toLowerCase());
  return matches;
}

export function isIncludedAtBeginning(
  parentStr: string,
  subStr: string
): boolean {
  if (!parentStr && !subStr) {
    return true;
  }
  const parentStrSafe = parentStr + '';
  const subStrSafe = subStr + '';
  const isAtBeginning =
    parentStrSafe.toLowerCase().indexOf(subStrSafe.toLowerCase()) === 0;
  return isAtBeginning;
}
