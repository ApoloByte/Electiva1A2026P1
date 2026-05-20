import { useCounter } from "../hooks/useCounter";
// 1.
import { StyledButton } from "./StyledButton";
export const Counter = () => {
    const { count, increaseBy } = useCounter();
    return (
        <div>
            <h3>
                Counter
                <small>{" " + count}</small>
            </h3>
            <div className="flex gap-4">
                {/* 2. */}
                <StyledButton
                    label={"+1"}
                    color="bg-red-500"
                    handleClick={() => increaseBy(1)}
                />
                <StyledButton
                    label={"-1"}
                    color="bg-red-500"
                    handleClick={() => increaseBy(-1)}
                />
            </div>
        </div>
    )
}