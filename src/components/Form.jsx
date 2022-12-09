const Form = (props) => {
    // HANDLER FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    // JSX
    return (
        <form onSubmit={handleSubmit}>
            <input className="add-color-input" placeholder="add a color" />
            <input className="submit-button" type='submit' value='Submit' />
        </form>
    );
};

export default Form;