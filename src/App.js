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
      <Form setColor={setColor} />
      <ul id='switcher'>
        {color.map((element, index) => {
          return <ColorList setCurrentBackgroundColor={setCurrentBackgroundColor} color={element} key={index} />
        })}
      </ul>
    </div>
  );
}

export default App;
