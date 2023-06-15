"use client";

import { useReducer, useState } from "react";

enum ActionType {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
}

interface Action {
  type: ActionType;
}

interface State {
  count: number;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + 1 };
    case ActionType.Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function () {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>About page</div>
      <div>Count: {state.count}</div>
      <div>
        <button
          className="rounded-md bg-slate-800 px-6 py-2 text-white"
          onClick={() => dispatch({ type: ActionType.Increment })}
        >
          +
        </button>{" "}
        <button
          className="rounded-md bg-slate-800 px-6 py-2 text-white"
          onClick={() => dispatch({ type: ActionType.Decrement })}
        >
          -
        </button>
      </div>
    </>
  );
}
