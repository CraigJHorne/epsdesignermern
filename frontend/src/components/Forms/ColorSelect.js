import { Button } from "react-bootstrap";

export function ColourSelect(props) {
  if (props.options) {
    return (
      <div style={{ marginLeft: "15px", display: "block" }}>
        <span>
          <h6 style={{ marginLeft: "5px" }}>
            {props.title}: {props.colorName}
          </h6>
        </span>
        {props.options?.map((option) => (
          <Button
            className="m-1"
            style={{
              borderBottom: `8px solid ${option.value}`,
            }}
            variant="outline-primary"
            value={option.value}
            pattern={option.patternColorValue}
            label={option.label}
            onClick={(e) => props.setFunction(e)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
