import { useSelector } from "react-redux";
import Todo from "./Todo";



export default function TodoList() {
    const todoS = useSelector((state) => state.todoS);
    const todoF = useSelector((state) => state.todoF);

    const filterByStatus = (todo) => {
        const { status } = todoF;
        switch (status) {
            case "Complete":
                return todo.completed;
    
                case "Incomplete":
                    return !todo.completed;
        
            default:
                return true;
        }
    }

    const filterByColor = (todo) => {
        const { colors } = todoF;
        
        if(colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todoS
            .filter(filterByStatus)
            .filter(filterByColor)
            .map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </div>
    );
}
