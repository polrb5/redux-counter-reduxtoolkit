import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-screen bg-purple-50 flex justify-center items-center">
      <div className="h-40 w-40 text-center">
        <span className="text-6xl">{count}</span>
        <div className="flex justify-center items-center">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full m-1"
          >
            -
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full m-1"
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
