import { Dropdown, DropdownButton } from "react-bootstrap";

export function DesignSelect(props) {
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
              value={option._id}
              name={option.name}
              breakpath={option.logo6break}
              logo1={option.logo1}
              logo2={option.logo2}
              logo3={option.logo3}
              logo4={option.logo4}
              logo5={option.logo5}
              logo6={option.logo6}
              logo7={option.logo7}
              logo8={option.logo8}
              logo9={option.logo9}
              logo10={option.logo10}
              logo12={option.logo12}
              logo13={option.logo13}
              logo14={option.logo14}
              logo15={option.logo15}
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
