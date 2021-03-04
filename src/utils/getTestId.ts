interface TestIdProps {
  index?: number;
  testId: string;
  name: string;
}

export const setTestId = ({ index, testId, name }: TestIdProps): string => {
  return typeof index === 'number'
    ? `${testId}-${name}-${index}`
    : `${testId}-${name}`;
};
