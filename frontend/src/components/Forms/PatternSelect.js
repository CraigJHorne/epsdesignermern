import { Dropdown, DropdownButton } from "react-bootstrap";

export function PatternSelect(props) {
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
              value={option.value}
              name={option.name}
              onClick={(e) => props.setFunction(e)}
            >
              {option.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      );
    } else {
      props.secondFunction("0");
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}
