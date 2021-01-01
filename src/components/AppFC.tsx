import React from 'react'

interface AppProps  {
  color: string;
}

// rafce
const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <h1>hi there {props.color} </h1>
    </div>
  )
}

export default App
