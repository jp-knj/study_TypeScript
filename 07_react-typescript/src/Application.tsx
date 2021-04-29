import { useReducer } from 'react';

type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'SET';
  payload?: number;
};

type CounterState = {
  value: number;
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      return { value: action.payload || 0 };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'SET', payload: 0 });
  const set = (n: number) => dispatch({ type: 'SET', payload: n });
  return (
    <main className="Counter">
      <h1>Day Since Last incidents</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;
export default Application;
