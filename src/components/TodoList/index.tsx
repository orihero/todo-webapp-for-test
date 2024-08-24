import TodoItem from "../TodoItem";
import "./TodoList.css";

export default function TodoList() {
  return (
    <div className="TodoList">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
