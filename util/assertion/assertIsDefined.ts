type AssertIsDefined = <T>(
  value: T | undefined | null,
  name: string,
) => asserts value is NonNullable<T>;

export const assertIsDefined: AssertIsDefined = <T>(
  value: T,
  name: string,
): asserts value is NonNullable<T> => {
  if (value === null || value === undefined) {
    throw new Error(`Expected ${name} to be defined, but received ${value}`);
  }
};
