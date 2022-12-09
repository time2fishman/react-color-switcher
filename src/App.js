import { useState } from 'react'
import './App.css';
import ColorList from './components/ColorList';
import Form from './components/Form';

function App() {
  // STATE
  const [color, setColor] = useState(['white', 'gray', 'blue', 'green'])
  console.log(color)
  const [currentbackgroundColor, setCurrentBackgroundColor] = useState()

  // JSX
  return (
    <div className="App">
      <h1>Color Scheme Switcher</h1>
      <p>Try clicking on one of the colors to change the background color on this page!</p>
      <Form />
      <ul id='switcher'>
        {color.map((element, index) => {
          return <ColorList color={element} key={index} />
        })}
      </ul>
    </div>
  );
}

export default App;
