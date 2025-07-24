import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counters/countersSlice";
// import { AppDispatch } from "../app/store";

const Counter: React.FC = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  return (
    <div>
      {counters.map((counter) => (
        <div key={counter.id} className="mb-4 p-2 border rounded">
          <h3 className="text-lg font-bold">
            Counter {counter.id}: {counter.value}
          </h3>
          <button
            onClick={() => dispatch(increment(counter.id))}
            className="bg-green-500 text-white px-8 py-1 mr-2 rounded"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement(counter.id))}
            className="bg-red-500 text-white px-8 py-1 rounded"
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Counter;
