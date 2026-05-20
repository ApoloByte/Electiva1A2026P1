import { useCounter } from "../hooks/useCounter";
export const Counter = () => {
    // 1
    const { count, increaseBy } = useCounter();
    // 2
    return (
        <div>
            <h3>
                Counter
								{/* 3 */}
                <small>{" " + count}</small>
            </h3>
            <div className="flex gap-4">
                <button
                    className="p-2 bg-blue-500 rounded-xs w-10 text-white"
                    // 3 
                    onClick={() => increaseBy(+1)}
                >
                    +1
                </button>
                <button
                    className="p-2 bg-blue-500 rounded-xs w-10 text-white"
                    // 3
                    onClick={() => increaseBy(-1)}
                >
                    -1
                </button>
            </div>
        </div>
    )
}