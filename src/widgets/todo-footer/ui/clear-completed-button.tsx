interface ClearCompletedButtonProps {
  onClear: () => void;
}

export const ClearCompletedButton = ({ onClear }: ClearCompletedButtonProps) => {
  return (
    <button
      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
      onClick={onClear}
    >
      Удалить завершенные
    </button>
  );
};
