interface ToggleAllButtonProps {
  onClick: () => void;
}

export const ToggleAllButton = ({ onClick }: ToggleAllButtonProps) => {
  return (
    <button
      className="p-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
      onClick={onClick}
      title="Toggle All"
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-current"
      >
        <path
          d="M2 12L7.25 17C7.25 17 8.66939 15.3778 9.875 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12L13.25 17L22 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7L12.5 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
