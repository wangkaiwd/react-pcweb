import React from 'react';

const App = () => (
  <div className="App">
    <Hello message={'Hello World!'}/>
    <code>const a = 'a'</code>
  </div>
);

export default App;

interface IHelloProps {message: string;}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>;
};
