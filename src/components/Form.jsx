import { useState } from 'react'

const Form = (props) => {
    // STATE
    const [newColor, setNewColor] = useState()
    console.log(newColor);
    
    // HANDLER FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setColor((current) => [...current, newColor])
    }

    console.log(newColor);

    // JSX
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='newColor' placeholder='add a color' onChange={e => setNewColor(e.target.value)} />
            <input type='submit' value='Submit' />
        </form>
    );
};

export default Form;