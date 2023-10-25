export const WordCount = ({ value }: { value: number }) => {
  return (
    <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Word count: {value}
    </h1>
  );
};
