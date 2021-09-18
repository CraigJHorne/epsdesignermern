import React from "react";
import "./Item.css";
import { PathComponent } from "./Paths.js";

export default function Item(props) {
  var garment = "prorugbyshirt";
  var sleeve = "setin";
  var baseColor = "#ffc629";
  var patternColor = "#ffb600";
  var topOrShorts = "top";
  var ssOrLs = "ss";
  var logosA = "playing";
  var logosB = "playing";
  var logosC = "playing";
  var logosD = "playing";
  var logosE = "playing";
  var logosF = "playing";
  var logosG = "none";
  var set1Color = "#238dc1";
  var set2Color = "#54c0e8";
  var set3Color = "#573c81";
  var aColor = "#295135";
  var bColor = "#93d500";
  var pattern = "0";
  var design = "1";
  var club = "castlefordtigers";
  var breakPath = "nobreakpath";
  var backgroundTone1 = "white";
  var backgroundTone2 = "white";
  var backgroundTone3 = "white";
  var backgroundTone4 = "white";
  var backgroundTone5 = "white";
  var backgroundTone6 = "white";
  var backgroundTone7 = "white";
  var backgroundTone8 = "white";
  var backgroundTone9 = "white";
  var backgroundTone10 = "white";
  var backgroundTone12 = "white";
  var backgroundTone13 = "white";
  var backgroundTone14 = "white";
  var backgroundTone15 = "white";

  if (props.garment) {
    garment = props.garment;
    sleeve = props.sleeve;
    baseColor = props.baseColor;
    patternColor = props.patternColor;
    topOrShorts = props.topOrShorts;
    ssOrLs = props.ssOrLs;
    logosA = props.logosA;
    logosB = props.logosB;
    logosC = props.logosC;
    logosD = props.logosD;
    logosE = props.logosE;
    logosF = props.logosF;
    logosG = props.logosG;
    set1Color = props.set1Color;
    set2Color = props.set2Color;
    set3Color = props.set3Color;
    aColor = props.aColor;
    bColor = props.bColor;
    pattern = props.pattern;
    design = props.design;
    club = props.club;
    breakPath = props.breakPath;
    backgroundTone1 = props.backgroundTone1;
    backgroundTone2 = props.backgroundTone2;
    backgroundTone3 = props.backgroundTone3;
    backgroundTone4 = props.backgroundTone4;
    backgroundTone5 = props.backgroundTone5;
    backgroundTone6 = props.backgroundTone6;
    backgroundTone7 = props.backgroundTone7;
    backgroundTone8 = props.backgroundTone8;
    backgroundTone9 = props.backgroundTone9;
    backgroundTone10 = props.backgroundTone10;
    backgroundTone12 = props.backgroundTone12;
    backgroundTone13 = props.backgroundTone13;
    backgroundTone14 = props.backgroundTone14;
    backgroundTone15 = props.backgroundTone15;
  }

  if (props.garment) {
    return (
      <React.Fragment>
        <div className="svgcontainer">
          <img
            className="itemsleeveclip "
            alt=""
            src={`/publicassets/item/sleeveclip/${garment}.svg`}
          />
          <img
            className={`itemlogo1${topOrShorts}`}
            alt=""
            src={`/publicassets/logos/${club}/all/${club}1${backgroundTone1}.svg`}
          />
          <img
            className={`itemlogo2${topOrShorts}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosA}/${club}2${backgroundTone2}.svg`}
          />
          <img
            className={`itemlogo3${topOrShorts}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosB}/${club}3${backgroundTone3}.svg`}
          />
          <img
            className={`itemlogo4${topOrShorts}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosC}/${club}4${backgroundTone4}.svg`}
          />
          <img
            className={`itemlogo5${topOrShorts}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosB}/${club}5${backgroundTone5}.svg`}
          />
          <img
            className="itemlogo6"
            alt=""
            src={`/publicassets/logos/${club}/${logosD}/${club}6${backgroundTone6}.svg`}
          />
          <img
            className="itemlogo7"
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}7${backgroundTone7}.svg`}
          />
          <img
            className="itemlogo8"
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}8${backgroundTone8}.svg`}
          />
          <img
            className="itemlogo9"
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}9${backgroundTone9}.svg`}
          />
          <img
            className="itemlogo10"
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}10${backgroundTone10}.svg`}
          />
          <img
            className="itemlogo11"
            alt=""
            src={`/publicassets/logos/${club}/${logosG}/${club}11white.svg`}
          />
          <img
            className={`itemlogo12front${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}12${backgroundTone12}.svg`}
          />
          <img
            className={`itemlogo13front${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosF}/${club}13${backgroundTone13}.svg`}
          />
          <img
            className={`itemlogo14front${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}14${backgroundTone14}.svg`}
          />
          <img
            className={`itemlogo15front${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosF}/${club}15${backgroundTone15}.svg`}
          />
          <img
            className={`itemlogo12back${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}12${backgroundTone12}.svg`}
          />
          <img
            className={`itemlogo13back${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosF}/${club}13${backgroundTone13}.svg`}
          />
          <img
            className={`itemlogo14back${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosE}/${club}14${backgroundTone14}.svg`}
          />
          <img
            className={`itemlogo15back${ssOrLs}`}
            alt=""
            src={`/publicassets/logos/${club}/${logosF}/${club}15${backgroundTone15}.svg`}
          />
          <PathComponent
            name={`${garment}set1`}
            className="itemdesignpath"
            fill={set1Color}
          />
          <PathComponent
            name={`${garment}set2`}
            className="itemdesignpath"
            fill={set2Color}
          />
          <PathComponent
            name={`${garment}set3`}
            className="itemdesignpath"
            fill={set3Color}
          />
          <PathComponent
            name={breakPath}
            className="itembreakpath"
            fill={baseColor}
          />
          <PathComponent
            name={`${breakPath}${pattern}`}
            className="itembreakpath"
            fill={patternColor}
          />
          <PathComponent
            name={`${garment}${sleeve}${design}A`}
            className="itemdesignpath"
            fill={aColor}
          />
          <PathComponent
            name={`${garment}${sleeve}${design}B`}
            className="itemdesignpath"
            fill={bColor}
          />
          <PathComponent
            name={`${garment}${sleeve}pattern${pattern}A`}
            className="itempatternpath"
            fill={patternColor}
          />
          <PathComponent
            name={`${garment}${sleeve}basepath`}
            className="itembasepath"
            fill={baseColor}
          />
          <img
            className="itembaseimage"
            alt=""
            src={`/publicassets/item/baseimage/${garment}.svg`}
          />
        </div>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}
