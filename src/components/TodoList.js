import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todoS = useSelector((state) => state.todoS);
    const todoF = useSelector((state) => state.todoF);

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todoS
            .filter(todo => {
                const { status } = todoF;
                switch (status) {
                    case "Complete":
                        return todo.completed;

                        case "Incomplete":
                            return !todo.completed;
                
                    default:
                        return true;
                }
            })
            .map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </div>
    );
}
