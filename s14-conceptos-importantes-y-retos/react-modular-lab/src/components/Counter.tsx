import { useCounter } from "../hooks/useCounter";
import { StyledButton } from "./StyledButton";

export const Counter = () => {

  const { count, increaseBy } = useCounter();

  return (
    <div className="text-center">

      <h3 className="text-4xl font-bold mb-6">
        Counter
        <small className="ml-2 text-blue-600">
          {count}
        </small>
      </h3>

      <div className="flex gap-4 justify-center">

        <StyledButton
          label="+1"
          color="bg-green-500"
          handleClick={() => increaseBy(1)}
        />

        <StyledButton
          label="-1"
          color="bg-red-500"
          handleClick={() => increaseBy(-1)}
        />

      </div>

    </div>
  );
};
