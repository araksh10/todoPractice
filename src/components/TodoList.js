import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todoS = useSelector((state) => state.todoS);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todoS.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </div>
    );
}
