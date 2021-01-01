import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps  {
  color: string;
}

const App: React.FC<AppProps> = (props) => {
  return <h1>hi there {props.color} </h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App color="red"/>
  </React.StrictMode>,
  document.getElementById('root')
);