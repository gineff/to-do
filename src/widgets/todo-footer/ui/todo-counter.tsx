interface TodoCounterProps {
  activeCount: number;
}

export const TodoCounter = ({ activeCount }: TodoCounterProps) => {
  return (
    <span className="text-sm text-gray-700">
      Задач осталось: <strong>{activeCount}</strong>
    </span>
  );
};
