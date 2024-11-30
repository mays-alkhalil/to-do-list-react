import './Todo.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // لمعرفة المهمة التي يتم تعديلها
  const [editText, setEditText] = useState(''); // لتخزين النص أثناء التعديل
  const inputRef = useRef();

  // استرجاع المهام المخزنة عند تحميل الصفحة
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // تحديث الـ localStorage عند تعديل المهام
  const updateLocalStorage = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (!text) return; // تجاهل الإدخالات الفارغة
    const newItem = { completed: false, text };
    const updatedTodos = [...todos, newItem];
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos); // تحديث التخزين
    inputRef.current.value = ''; // تفريغ الحقل
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    updateLocalStorage(newTodos); // تحديث التخزين
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    updateLocalStorage(newTodos); // تحديث التخزين
  };

  const handleEditItem = (index) => {
    setIsEditing(index);
    setEditText(todos[index].text);
  };

  const handleSaveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editText;
    setTodos(newTodos);
    updateLocalStorage(newTodos);
    setIsEditing(null); // إنهاء وضع التعديل
    setEditText('');
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="todo-container">
        <ul>
          {todos.map(({ text, completed }, index) => (
            <div className="item" key={index}>
              {isEditing === index ? (
                // حالة التعديل
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <span
                    onClick={() => handleSaveEdit(index)}
                    title="Save"
                    style={{ cursor: 'pointer' }}
                  >
                    💾
                  </span>
                </>
              ) : (
                // حالة العرض العادي
                <>
                  <li
                    className={completed ? 'done' : ''}
                    onClick={() => handleItemDone(index)}
                  >
                    {text}
                  </li>
                  <div>
                    <span
                      onClick={() => handleEditItem(index)}
                      title="Edit"
                      style={{ cursor: 'pointer' }}
                    >
                      ✏️
                    </span>
                    <span
                      onClick={() => handleDeleteItem(index)}
                      className="trash"
                      title="Delete"
                      style={{ cursor: 'pointer' }}
                    >
                      ❌
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </ul>
        <input
          ref={inputRef}
          placeholder="Enter a new task..."
          aria-label="New task input"
        />
        <button type="submit" onClick={handleAddTodo}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
