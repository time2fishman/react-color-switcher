import ColorListItem from "./ColorListItem";

const ColorList = (props) => {
    // JSX
    return <ColorListItem setCurrentBackgroundColor={props.setCurrentBackgroundColor} color={props.color} />
}
export default ColorList