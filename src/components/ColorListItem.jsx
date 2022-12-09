const ColorListItem = (props) => {
    // JSX
    return <li className={props.color} onClick={() => props.setCurrentBackgroundColor(props.color)}></li>
};

export default ColorListItem;