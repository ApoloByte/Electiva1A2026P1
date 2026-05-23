import { useCounter } from "../hooks/useCounter";
//traemos el componente 
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

                
                <StyledButton
                    label={"+1"}
                    color="bg-pink-500"
                    handleClick={() => increaseBy(1)}
                />

                <StyledButton
                    label={"-1"}
                    color="bg-red-500"
                    handleClick={() => increaseBy(-1)}
                />

            </div>

        </div>
    );
}