import { Tab, Tabs } from "react-bootstrap";
import { ColourSelect } from "./ColorSelect";

export function ColourTabs(props) {
  if (props.options) {
    return (
      <Tabs defaultActiveKey="base" id="noanim-tab-example" className="m-3">
        <Tab eventKey="base" title="Base Colour">
          <ColourSelect
            options={props.options}
            colorName={props.baseColorName}
            setFunction={props.baseColorChange}
            title="Base Colour"
          />
        </Tab>
        <Tab eventKey="a" title="Colour A">
          <ColourSelect
            options={props.options}
            colorName={props.aColorName}
            setFunction={props.aColorChange}
            title="Colour A"
          />
        </Tab>
        <Tab eventKey="b" title="Colour B">
          <ColourSelect
            options={props.options}
            colorName={props.bColorName}
            setFunction={props.bColorChange}
            title="Colour B"
          />
        </Tab>
        <Tab eventKey="set1" title={props.set1Name}>
          <ColourSelect
            options={props.options}
            colorName={props.set1ColorName}
            setFunction={props.set1ColorChange}
            title={props.set1Name}
          />
        </Tab>
        <Tab eventKey="set2" title={props.set2Name}>
          <ColourSelect
            options={props.options}
            colorName={props.set2ColorName}
            setFunction={props.set2ColorChange}
            title={props.set2Name}
          />
        </Tab>
        <Tab eventKey="set3" title={props.set3Name}>
          <ColourSelect
            options={props.options}
            colorName={props.set3ColorName}
            setFunction={props.set3ColorChange}
            title={props.set3Name}
          />
        </Tab>
      </Tabs>
    );
  } else {
    return <div></div>;
  }
}
