type Filter = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  currentFilter: Filter;
  onChange: (filter: Filter) => void;
}

export const TodoFilter = ({ currentFilter, onChange }: TodoFilterProps) => {
  const filters: { label: string; value: Filter }[] = [
    { label: 'Все', value: 'all' },
    { label: 'Активные', value: 'active' },
    { label: 'Завершенные', value: 'completed' },
  ];

  return (
    <div className="flex items-center gap-2">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-2 py-1 text-sm rounded transition ${
            currentFilter === value
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
