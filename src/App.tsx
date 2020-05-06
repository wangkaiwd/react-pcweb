import React from 'react';

const App = () => (
  <div className="App">
    <Hello message={'Hello World!'}/>
  </div>
);

export default App;

interface IHelloProps {message: string;}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>;
};
