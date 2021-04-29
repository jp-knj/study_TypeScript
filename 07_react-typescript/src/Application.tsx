import { Component } from 'react';

class Counter extends Component {
 render() {
  return (
   <main className="Counter">
    <h1>Day Since Last Incident</h1>
    <p className="count">0</p>
    <section className="controls">
     <button>Increment</button>
     <button>Reset</button>
     <button>Decrement</button>
    </section>
   </main>
  );
 }
}

class Application extends Component {
 render() {
  return <Counter />;
 }
}
export default Application;
