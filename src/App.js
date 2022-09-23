import React from 'react';
import './App.css';
import './Prova.jsx';
import Album from './Prova.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dog/>
        <Dog/>
        <Cat/>
        <Album/>
        
      </header>
    </div>
  );
}

export default App;

function Dog() {
  return(
    <div>Hello World</div>
  );
}
class Cat extends React.Component{
  render(){
    return (
      <div>Prova Class</div>
    );
  }
}