export function assert<T>(v: T | undefined, errorMessage: string): T {
  if (typeof v === 'undefined') {
    throw new Error(errorMessage);
  }
  return v;
}
