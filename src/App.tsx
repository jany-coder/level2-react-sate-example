import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center gap-4 h-screen items-center">
      <button
        onClick={() => dispatch(increment())}
        className="px-3 py-3 rounded-md bg-green-500 text-white"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="px-3 py-3 rounded-md bg-green-500 text-white"
      >
        Increment by 5
      </button>
      <h1 className="h-8 flex justify-center items-center text-2xl my-2">
        {count}
      </h1>
      <button
        onClick={() => dispatch(decrement())}
        className="px-3 py-3 rounded-md bg-red-500 text-white"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
