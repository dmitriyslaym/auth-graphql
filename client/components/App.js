import React from 'react';
import Header from './Header'

const App = (props) => {
  return (
    <div>
      <Header/>
      App
      {props.children}
    </div>
  );
};

export default App;
