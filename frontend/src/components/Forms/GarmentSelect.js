import { Dropdown, DropdownButton } from "react-bootstrap";

export default function GarmentSelect(props) {
  return (
    <DropdownButton
      id="dropdown-garment-button-end"
      title={`${props.title}: ${props.currentOption}`}
      variant="outline-primary"
      drop="right"
      className="mx-3"
      style={{ display: "inline-block" }}
      onClick={(e) => props.setFunction(e.target.getAttribute("value"))}
    >
      {props.options?.map((option) => (
        <Dropdown.Item key={option._id} value={option._id}>
          {option.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
