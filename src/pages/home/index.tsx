import { Link } from '@/shared/ui/link';

export const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">📝 Todo App — Тестовое задание</h1>
        <p className="text-lg text-gray-700">
          Простое веб-приложение для управления списком задач.
        </p>
        <Link
          to="/todo"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Перейти к списку задач →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🔧 Базовая настройка</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>
            <strong>Prettier</strong> — автоматическое форматирование кода
          </li>
          <li>
            <strong>Tailwind CSS</strong> — стилизация компонентов
          </li>
          <li>
            <strong>Алиасы путей</strong> — поддержка <code>@/</code>-импортов
          </li>
        </ul>
      </section>

      <section id="state-management" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>🔄</span> Управление состоянием
        </h2>

        <div className="mb-6">
          Состояние приложения управляется через кастомный менеджер состояний на базе{' '}
          <strong className="font-semibold">useReducer + useContext</strong> с применением следующих
          концепций <strong className="font-semibold">Redux</strong>:
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span>🧩</span> Slice (
            <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">entities/todo</code>)
          </h3>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <strong className="font-medium">Actions:</strong> действия над задачами
            </li>
            <li>
              <strong className="font-medium">Reducer:</strong> обработка изменений состояния
            </li>
            <li>
              <strong className="font-medium">Selectors:</strong> мемоизированные методы получения
              данных из стора
            </li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span>⚙️</span> Async Thunk'и
          </h3>
          <p className="mb-2">Реализована асинхронная логика:</p>
          <ul className="space-y-2 ml-4">
            <li>
              <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">createTodoThunk</code>
            </li>
            <li>
              <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">toggleAllTodosThunk</code>
            </li>
            <li>
              <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">
                deleteCompletedTodosThunk
              </code>
            </li>
            <li>
              <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">updateTodoThunk</code>
            </li>
            <li>
              <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">deleteTodoThunk</code>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span>🔌</span> Middleware
          </h3>
          <p>
            Подключен <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">thunk</code>,
            чтобы обрабатывать асинхронные операции.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🎨 UI-компоненты</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Компонент</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Описание</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                  <code>TodoItem</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  Элемент списка задач с возможностью редактирования и удаления
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                  <code>TodoHeaderWidget</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  Панель добавления новой задачи и кнопка "Отметить всё"
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 whitespace-nowrap">
                  <code>TodoFooterWidget</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  Панель фильтрации и удаления выполненных задач
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
