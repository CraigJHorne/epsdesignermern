import { Dropdown, DropdownButton } from "react-bootstrap";

export function SleeveSelect(props) {
  if (props.options) {
    if (props.options.length > 1) {
      return (
        <DropdownButton
          id="dropdown-garment-button-end"
          title={`${props.title}: ${props.currentOption}`}
          variant="outline-primary"
          drop="right"
          className="m-3"
          style={{ display: "inline-block" }}
        >
          {props.options?.map((option) => (
            <Dropdown.Item
              value={option}
              onClick={(e) => props.setFunction(e.target.getAttribute("value"))}
            >
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      );
    } else {
      props.setFunction(props.options[0]);
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}
