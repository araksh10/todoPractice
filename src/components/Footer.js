import { useDispatch, useSelector } from "react-redux";
import { todoStatusChange, todoColorChange } from "../redux/todoFilters/todoFilterActions";


const todoNumberFormatter = (no_of_tasks) => {
    switch (no_of_tasks) {
        case 0:
            return "No task left";

        case 1:
            return "1 task left";
            
            default:
                return `${no_of_tasks} tasks left`;
            }
        }
        
export default function Footer() {
    const todoS = useSelector((state) => state.todoS);
    const filters = useSelector((state) => state.todoF);
    const dispatch = useDispatch();
    const { status, colors} = filters;

    const handleStatusChange = (todoStatus) => {
        dispatch(todoStatusChange(todoStatus));
    }

    const handleColorChange = (todoColor) => {
        if (colors.includes(todoColor)) {
            dispatch(todoColorChange(todoColor, "removed"));
        } else {
            dispatch(todoColorChange(todoColor, "added"));            
        }
    }


    const no_of_tasks = todoS.filter(todo => !todo.completed).length;
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{todoNumberFormatter(no_of_tasks)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === "All" && "font-bold"}`} onClick={() => handleStatusChange("All")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`} onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Complete" && "font-bold"}`} onClick={() => handleStatusChange("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"}`} onClick={() => handleColorChange("green")}></li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`} onClick={() => handleColorChange("red")}></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`} onClick={() => handleColorChange("yellow")}></li>
            </ul>
        </div>
    );
}
