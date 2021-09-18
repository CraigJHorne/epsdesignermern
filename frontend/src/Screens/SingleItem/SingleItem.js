import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createItemAction, updateItemAction } from "../../actions/itemsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory, useRouteMatch } from "react-router";
import { listGarments } from "../../actions/garmentActions";
import Item from "../../components/Item/Item";
import { SleeveSelect } from "../../components/Forms/SleeveSelect";
import GarmentSelect from "../../components/Forms/GarmentSelect.js";
import { ColourTabs } from "../../components/Forms/ColorTabs";
import { PatternSelect } from "../../components/Forms/PatternSelect";
import { DesignSelect } from "../../components/Forms/DesignSelect";
import clubs from "../../components/clubs";
import { designBreakChange } from "../../components/Logic/designBreakChange";
import { logoToneChange } from "../../components/Logic/logoToneChange";
import axios from "axios";

function SingleItem({}) {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  // STATE SETS

  const garmentList = useSelector((state) => state.garmentList);
  const { garments } = garmentList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const clubObject = clubs.filter((club) => club.value === userInfo.club)[0];

  const [collectionId, setCollectionId] = useState("");

  const [club, setClub] = useState(userInfo.club);
  const [garment, setGarment] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [baseColor, setBaseColor] = useState("#ffffff");
  const [patternColor, setPatternColor] = useState("#d9d8d6");
  const [set1Color, setSet1Color] = useState("#ffffff");
  const [set2Color, setSet2Color] = useState("#ffffff");
  const [set3Color, setSet3Color] = useState("#ffffff");
  const [aColor, setAColor] = useState("#ffffff");
  const [bColor, setBColor] = useState("#ffffff");
  const [ssOrLs, setSsOrLs] = useState("");
  const [topOrShorts, setTopOrShorts] = useState("");
  const [logosA, setLogosA] = useState("playing");
  const [logosB, setLogosB] = useState("playing");
  const [logosC, setLogosC] = useState("playing");
  const [logosD, setLogosD] = useState("playing");
  const [logosE, setLogosE] = useState("playing");
  const [logosF, setLogosF] = useState("playing");
  const [logosG, setLogosG] = useState("playing");
  const [pattern, setPattern] = useState("");
  const [design, setDesign] = useState("");
  const [breakPath, setBreakPath] = useState("nobreakpath");

  const [logo1, setLogo1] = useState("baseColor");
  const [logo2, setLogo2] = useState("baseColor");
  const [logo3, setLogo3] = useState("baseColor");
  const [logo4, setLogo4] = useState("baseColor");
  const [logo5, setLogo5] = useState("baseColor");
  const [logo6, setLogo6] = useState("baseColor");
  const [logo7, setLogo7] = useState("baseColor");
  const [logo8, setLogo8] = useState("baseColor");
  const [logo9, setLogo9] = useState("baseColor");
  const [logo10, setLogo10] = useState("baseColor");
  const [logo12, setLogo12] = useState("baseColor");
  const [logo13, setLogo13] = useState("baseColor");
  const [logo14, setLogo14] = useState("baseColor");
  const [logo15, setLogo15] = useState("baseColor");
  const [backgroundTone1, setBackgroundTone1] = useState("white");
  const [backgroundTone2, setBackgroundTone2] = useState("white");
  const [backgroundTone3, setBackgroundTone3] = useState("white");
  const [backgroundTone4, setBackgroundTone4] = useState("white");
  const [backgroundTone5, setBackgroundTone5] = useState("white");
  const [backgroundTone6, setBackgroundTone6] = useState("white");
  const [backgroundTone7, setBackgroundTone7] = useState("white");
  const [backgroundTone8, setBackgroundTone8] = useState("white");
  const [backgroundTone9, setBackgroundTone9] = useState("white");
  const [backgroundTone10, setBackgroundTone10] = useState("white");
  const [backgroundTone12, setBackgroundTone12] = useState("white");
  const [backgroundTone13, setBackgroundTone13] = useState("white");
  const [backgroundTone14, setBackgroundTone14] = useState("white");
  const [backgroundTone15, setBackgroundTone15] = useState("white");

  const [garmentName, setGarmentName] = useState("");
  const [baseColorName, setBaseColorName] = useState("White");
  const [set1ColorName, setSet1ColorName] = useState("White");
  const [set2ColorName, setSet2ColorName] = useState("White");
  const [set3ColorName, setSet3ColorName] = useState("White");
  const [set1Name, setSet1Name] = useState("");
  const [set2Name, setSet2Name] = useState("");
  const [set3Name, setSet3Name] = useState("");
  const [aColorName, setAColorName] = useState("White");
  const [bColorName, setBColorName] = useState("White");
  const [patternName, setPatternName] = useState("");
  const [designName, setDesignName] = useState("");

  const [sleeveOptions, setSleeveOptions] = useState(null);
  const [colorOptions, setColorOptions] = useState(null);
  const [patternOptions, setPatternOptions] = useState(null);
  const [designOptions, setDesignOptions] = useState(null);

  // EVENT HANDLERS

  // -- GARMENT

  const getGarment = (garmentId) => {
    if (garments) {
      const garmentPicked = garments.filter(
        (garment) => garment._id === garmentId
      );
      return garmentPicked[0];
    } else {
      return "";
    }
  };

  const getGarmentProperties = (e) => {
    const garmentChosen = getGarment(e);
    if (garmentChosen) {
      setGarment(garmentChosen["value"]);
      setGarmentName(garmentChosen["name"]);
      setColorOptions(garmentChosen["colorOptions"]);
      setSleeveOptions(garmentChosen["sleeveOptions"]);
      setPatternOptions(garmentChosen["patternOptions"]);
      setDesignOptions(garmentChosen["designOptions"]);
      setSleeve(garmentChosen["sleeveOptions"][0]);
      setSsOrLs(garmentChosen["ssOrLs"]);
      setTopOrShorts(garmentChosen["topOrShorts"]);
      setLogosA(garmentChosen["logosA"]);
      setLogosB(garmentChosen["logosB"]);
      setLogosC(garmentChosen["logosC"]);
      setLogosD(garmentChosen["logosD"]);
      setLogosE(garmentChosen["logosE"]);
      setLogosF(garmentChosen["logosF"]);
      setLogosG(garmentChosen["logosG"]);
      setSet1Name(garmentChosen["set1"]);
      setSet2Name(garmentChosen["set2"]);
      setSet3Name(garmentChosen["set3"]);

      if (colorOptions) {
        // there are color Options selection

        if (
          garmentChosen["colorOptions"].filter((e) => e.value === baseColor)
            .length === 0
        ) {
          setBaseColor("#000000");
          setPatternColor("#3d3935");
        }
      }

      colorSubToCs(garmentChosen, aColor, setAColor);
      colorSubToCs(garmentChosen, bColor, setBColor);
      colorSubToCs(garmentChosen, set1Color, setSet1Color);
      colorSubToCs(garmentChosen, set2Color, setSet2Color);
      colorSubToCs(garmentChosen, set3Color, setSet3Color);

      if (patternOptions) {
        // there are pattern Options

        if (
          garmentChosen["patternOptions"].filter((e) => e.value === pattern)
            .length === 0
        ) {
          // the new garment doesnt have a pattern for the current pattern number

          setPattern("0");
          setPatternName("None");
        } else {
          // the new garment does have a pattern for the cureent pattern number
          setPatternName(garmentChosen["patternOptions"][pattern].name);
        }
      } else {
        // there are no Pattern Options

        setPattern("0");
        setPatternName("None");
      }

      if (designOptions) {
        // there are Design options

        if (
          garmentChosen["designOptions"].filter((e) => e._id === design)
            .length === 0
        ) {
          // if the new garment doesn't have a design for the current design number

          setDesign("1");
          setDesignName(garmentChosen["designOptions"][0].name);
          setDesignBreak(
            garmentChosen["logosD"],
            garmentChosen["designOptions"][0].logo6break
          );
          setAllLogos(garmentChosen);

          setLogoTones(
            garmentChosen["designOptions"][0].logo1,
            garmentChosen["designOptions"][0].logo2,
            garmentChosen["designOptions"][0].logo3,
            garmentChosen["designOptions"][0].logo4,
            garmentChosen["designOptions"][0].logo5,
            garmentChosen["designOptions"][0].logo6,
            garmentChosen["designOptions"][0].logo7,
            garmentChosen["designOptions"][0].logo8,
            garmentChosen["designOptions"][0].logo9,
            garmentChosen["designOptions"][0].logo10,
            garmentChosen["designOptions"][0].logo12,
            garmentChosen["designOptions"][0].logo13,
            garmentChosen["designOptions"][0].logo14,
            garmentChosen["designOptions"][0].logo15,
            baseColor,
            aColor,
            bColor,
            garmentChosen["logosA"],
            garmentChosen["logosB"],
            garmentChosen["logosC"],
            garmentChosen["logosD"],
            garmentChosen["logosE"],
            garmentChosen["logosF"],
            breakPath,
            clubObject,
            colorOptions
          );
        } else {
          // if the new garment does have a design for the current design number
          setDesignName(
            garmentChosen["designOptions"][parseInt(design) - 1].name
          );
          setDesignBreak(
            garmentChosen["logosD"],
            garmentChosen["designOptions"][parseInt(design) - 1].logo6break
          );

          setAllLogos(garmentChosen);
          setLogoTones(
            garmentChosen["designOptions"][parseInt(design) - 1].logo1,
            garmentChosen["designOptions"][parseInt(design) - 1].logo2,
            garmentChosen["designOptions"][parseInt(design) - 1].logo3,
            garmentChosen["designOptions"][parseInt(design) - 1].logo4,
            garmentChosen["designOptions"][parseInt(design) - 1].logo5,
            garmentChosen["designOptions"][parseInt(design) - 1].logo6,
            garmentChosen["designOptions"][parseInt(design) - 1].logo7,
            garmentChosen["designOptions"][parseInt(design) - 1].logo8,
            garmentChosen["designOptions"][parseInt(design) - 1].logo9,
            garmentChosen["designOptions"][parseInt(design) - 1].logo10,
            garmentChosen["designOptions"][parseInt(design) - 1].logo12,
            garmentChosen["designOptions"][parseInt(design) - 1].logo13,
            garmentChosen["designOptions"][parseInt(design) - 1].logo14,
            garmentChosen["designOptions"][parseInt(design) - 1].logo15,
            baseColor,
            aColor,
            bColor,
            garmentChosen["logosA"],
            garmentChosen["logosB"],
            garmentChosen["logosC"],
            garmentChosen["logosD"],
            garmentChosen["logosE"],
            garmentChosen["logosF"],
            breakPath,
            clubObject,
            colorOptions
          );
        }
      } else {
        // no design options
        setDesign("1");
        setDesignName(garmentChosen["designOptions"][0].name);
        setDesignBreak(
          garmentChosen["logosD"],
          garmentChosen["designOptions"][0].logo6break
        );
        setAllLogos(garmentChosen);
        setLogoTones(
          garmentChosen["designOptions"][0].logo1,
          garmentChosen["designOptions"][0].logo2,
          garmentChosen["designOptions"][0].logo3,
          garmentChosen["designOptions"][0].logo4,
          garmentChosen["designOptions"][0].logo5,
          garmentChosen["designOptions"][0].logo6,
          garmentChosen["designOptions"][0].logo7,
          garmentChosen["designOptions"][0].logo8,
          garmentChosen["designOptions"][0].logo9,
          garmentChosen["designOptions"][0].logo10,
          garmentChosen["designOptions"][0].logo12,
          garmentChosen["designOptions"][0].logo13,
          garmentChosen["designOptions"][0].logo14,
          garmentChosen["designOptions"][0].logo15,
          baseColor,
          aColor,
          bColor,
          garmentChosen["logosA"],
          garmentChosen["logosB"],
          garmentChosen["logosC"],
          garmentChosen["logosD"],
          garmentChosen["logosE"],
          garmentChosen["logosF"],
          breakPath,
          clubObject,
          colorOptions
        );
      }
    }
  };

  // --- COLORS

  function colorSubToCs(garmentChosen, option, setFunction) {
    if (colorOptions) {
      if (
        garmentChosen["colorOptions"].filter((e) => e.value === option)
          .length === 0
      ) {
        setFunction("#000000");
      }
    }
  }

  function baseColorChange(e) {
    setBaseColor(e.target.getAttribute("value"));
    setPatternColor(e.target.getAttribute("pattern"));
    setBaseColorName(e.target.getAttribute("label"));
    setLogoTones(
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo12,
      logo13,
      logo14,
      logo15,
      e.target.getAttribute("value"),
      aColor,
      bColor,
      logosA,
      logosB,
      logosC,
      logosD,
      logosE,
      logosF,
      breakPath,
      clubObject,
      colorOptions
    );
  }

  function aColorChange(e) {
    setAColor(e.target.getAttribute("value"));
    setAColorName(e.target.getAttribute("label"));
    setLogoTones(
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo12,
      logo13,
      logo14,
      logo15,
      baseColor,
      e.target.getAttribute("value"),
      bColor,
      logosA,
      logosB,
      logosC,
      logosD,
      logosE,
      logosF,
      breakPath,
      clubObject,
      colorOptions
    );
  }

  function bColorChange(e) {
    setBColor(e.target.getAttribute("value"));
    setBColorName(e.target.getAttribute("label"));
    setLogoTones(
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo12,
      logo13,
      logo14,
      logo15,
      baseColor,
      aColor,
      e.target.getAttribute("value"),
      logosA,
      logosB,
      logosC,
      logosD,
      logosE,
      logosF,
      breakPath,
      clubObject,
      colorOptions
    );
  }

  function set1ColorChange(e) {
    setSet1Color(e.target.getAttribute("value"));
    setSet1ColorName(e.target.getAttribute("label"));
  }

  function set2ColorChange(e) {
    setSet2Color(e.target.getAttribute("value"));
    setSet2ColorName(e.target.getAttribute("label"));
  }

  function set3ColorChange(e) {
    setSet3Color(e.target.getAttribute("value"));
    setSet3ColorName(e.target.getAttribute("label"));
  }

  // --- PATTERN

  function patternChange(e) {
    setPattern(e.target.getAttribute("value"));
    setPatternName(e.target.getAttribute("name"));
  }

  // --- DESIGN

  function designChange(e) {
    setDesign(e.target.getAttribute("value"));
    setDesignName(e.target.getAttribute("name"));
    setDesignBreak(logosD, e.target.getAttribute("breakpath"));
    setLogo1(e.target.getAttribute("logo1"));
    setLogo2(e.target.getAttribute("logo2"));
    setLogo3(e.target.getAttribute("logo3"));
    setLogo4(e.target.getAttribute("logo4"));
    setLogo5(e.target.getAttribute("logo5"));
    setLogo6(e.target.getAttribute("logo6"));
    setLogo7(e.target.getAttribute("logo7"));
    setLogo8(e.target.getAttribute("logo8"));
    setLogo9(e.target.getAttribute("logo9"));
    setLogo10(e.target.getAttribute("logo10"));
    setLogo12(e.target.getAttribute("logo12"));
    setLogo13(e.target.getAttribute("logo13"));
    setLogo14(e.target.getAttribute("logo14"));
    setLogo15(e.target.getAttribute("logo15"));
    setLogoTones(
      e.target.getAttribute("logo1"),
      e.target.getAttribute("logo2"),
      e.target.getAttribute("logo3"),
      e.target.getAttribute("logo4"),
      e.target.getAttribute("logo5"),
      e.target.getAttribute("logo6"),
      e.target.getAttribute("logo7"),
      e.target.getAttribute("logo8"),
      e.target.getAttribute("logo9"),
      e.target.getAttribute("logo10"),
      e.target.getAttribute("logo12"),
      e.target.getAttribute("logo13"),
      e.target.getAttribute("logo14"),
      e.target.getAttribute("logo15"),
      baseColor,
      aColor,
      bColor,
      logosA,
      logosB,
      logosC,
      logosD,
      logosE,
      logosF,
      breakPath,
      clubObject,
      colorOptions
    );
  }

  // -- DESIGNBREAK

  function setDesignBreak(logosD, newDesignBreakPath) {
    designBreakChange(logosD, clubObject, newDesignBreakPath, setBreakPath);
  }

  // -- LOGO TONES

  function setAllLogos(garmentChosen) {
    setLogo1(garmentChosen["designOptions"][0].logo1);
    setLogo2(garmentChosen["designOptions"][0].logo2);
    setLogo3(garmentChosen["designOptions"][0].logo3);
    setLogo4(garmentChosen["designOptions"][0].logo4);
    setLogo5(garmentChosen["designOptions"][0].logo5);
    setLogo6(garmentChosen["designOptions"][0].logo6);
    setLogo7(garmentChosen["designOptions"][0].logo7);
    setLogo8(garmentChosen["designOptions"][0].logo8);
    setLogo9(garmentChosen["designOptions"][0].logo9);
    setLogo10(garmentChosen["designOptions"][0].logo10);
    setLogo12(garmentChosen["designOptions"][0].logo12);
    setLogo13(garmentChosen["designOptions"][0].logo13);
    setLogo14(garmentChosen["designOptions"][0].logo14);
    setLogo15(garmentChosen["designOptions"][0].logo15);
  }

  function setLogoTones(
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo12,
    logo13,
    logo14,
    logo15,
    baseColor,
    aColor,
    bColor,
    logosA,
    logosB,
    logosC,
    logosD,
    logosE,
    logosF,
    breakPath,
    clubObject,
    colorOptions
  ) {
    var colorOptionsTemp = colorOptions;
    if (colorOptions === null) {
      colorOptionsTemp = [
        {
          _id: "2",
          value: "#ffffff",
          label: "White",
          tone: "white",
          patternColorLabel: "Cool Gray 1C",
          patternColorValue: "#d9d8d6",
          text: "#000000",
        },
      ];
    }

    var logo2Type = logosA + "logo2";
    var logo3Type = logosB + "logo3";
    var logo4Type = logosC + "logo4";
    var logo5Type = logosB + "logo5";
    var logo6Type = logosD + "logo6";
    var logo7Type = logosE + "logo7";
    var logo8Type = logosE + "logo8";
    var logo9Type = logosE + "logo9";
    var logo10Type = logosE + "logo10";
    var logo12Type = logosE + "logo12";
    var logo13Type = logosF + "logo13";
    var logo14Type = logosE + "logo14";
    var logo15Type = logosF + "logo15";

    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo1,
      "alllogo1",
      setBackgroundTone1,
      logosB,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo2,
      logo2Type,
      setBackgroundTone2,
      logosA,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo3,
      logo3Type,
      setBackgroundTone3,
      logosB,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo4,
      logo4Type,
      setBackgroundTone4,
      logosC,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo5,
      logo5Type,
      setBackgroundTone5,
      logosB,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo6,
      logo6Type,
      setBackgroundTone6,
      logosD,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo7,
      logo7Type,
      setBackgroundTone7,
      logosE,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo8,
      logo8Type,
      setBackgroundTone8,
      logosE,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo9,
      logo9Type,
      setBackgroundTone9,
      logosE,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo10,
      logo10Type,
      setBackgroundTone10,
      logosE,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo12,
      logo12Type,
      setBackgroundTone12,
      logosE,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo13,
      logo13Type,
      setBackgroundTone13,
      logosF,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo14,
      logo14Type,
      setBackgroundTone14,
      logosE,
      breakPath
    );
    logoToneChange(
      baseColor,
      aColor,
      bColor,
      colorOptionsTemp,
      clubObject,
      logo15,
      logo15Type,
      setBackgroundTone15,
      logosF,
      breakPath
    );
  }

  // SUBMIT/CANCEL HANDLERS

  const itemCreate = useSelector((state) => state.itemCreate);
  const { loading, error, item } = itemCreate;

  const cancelHandler = () => {
    window.location.href = `/collections/collection/${collectionId}`;
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateItemAction(
        match.params.id,
        garment,
        sleeve,
        baseColor,
        patternColor,
        aColor,
        bColor,
        set1Color,
        set2Color,
        set3Color,
        ssOrLs,
        topOrShorts,
        logosA,
        logosB,
        logosC,
        logosD,
        logosE,
        logosF,
        logosG,
        pattern,
        design,
        club,
        breakPath,
        backgroundTone1,
        backgroundTone2,
        backgroundTone3,
        backgroundTone4,
        backgroundTone5,
        backgroundTone6,
        backgroundTone7,
        backgroundTone8,
        backgroundTone9,
        backgroundTone10,
        backgroundTone12,
        backgroundTone13,
        backgroundTone14,
        backgroundTone15,
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo12,
        logo13,
        logo14,
        logo15,
        garmentName,
        baseColorName,
        set1ColorName,
        set2ColorName,
        set3ColorName,
        set1Name,
        set2Name,
        set3Name,
        aColorName,
        bColorName,
        patternName,
        designName,
        sleeveOptions,
        colorOptions,
        designOptions,
        patternOptions
      )
    );
    if (!garment) return;

    window.location.href = `/collections/collection/${collectionId}`;
  };

  useEffect(() => {
    dispatch(listGarments(match.params.id));
    const fetching = async () => {
      const { data } = await axios.get(`/api/items/item/${match.params.id}`);

      setTopOrShorts(data.topOrShorts);
      setSsOrLs(data.ssOrLs);
      setBackgroundTone1(data.backgroundTone1);
      setBackgroundTone2(data.backgroundTone2);
      setBackgroundTone3(data.backgroundTone3);
      setBackgroundTone4(data.backgroundTone4);
      setBackgroundTone5(data.backgroundTone5);
      setBackgroundTone6(data.backgroundTone6);
      setBackgroundTone7(data.backgroundTone7);
      setBackgroundTone8(data.backgroundTone8);
      setBackgroundTone9(data.backgroundTone9);
      setBackgroundTone10(data.backgroundTone10);
      setBackgroundTone12(data.backgroundTone12);
      setBackgroundTone13(data.backgroundTone13);
      setBackgroundTone14(data.backgroundTone14);
      setBackgroundTone15(data.backgroundTone15);
      setLogosA(data.logosA);
      setLogosB(data.logosB);
      setLogosC(data.logosC);
      setLogosD(data.logosD);
      setLogosE(data.logosE);
      setLogosF(data.logosF);
      setLogosG(data.logosG);
      setSet1Color(data.set1Color);
      setSet2Color(data.set2Color);
      setSet3Color(data.set3Color);
      setBaseColor(data.baseColor);
      setPatternColor(data.patternColor);
      setAColor(data.aColor);
      setBColor(data.bColor);
      setBreakPath(data.breakPath);
      setPattern(data.pattern);
      setDesign(data.design);
      setSleeve(data.sleeve);
      setClub(data.club);
      setLogo1(data.logo1);
      setLogo2(data.logo2);
      setLogo3(data.logo3);
      setLogo4(data.logo4);
      setLogo5(data.logo5);
      setLogo6(data.logo6);
      setLogo7(data.logo7);
      setLogo8(data.logo8);
      setLogo9(data.logo9);
      setLogo10(data.logo10);
      setLogo12(data.logo12);
      setLogo13(data.logo13);
      setLogo14(data.logo14);
      setLogo15(data.logo15);
      setGarmentName(data.garmentName);
      setBaseColorName(data.baseColorName);
      setSet1ColorName(data.set1ColorName);
      setSet2ColorName(data.set2ColorName);
      setSet3ColorName(data.set3ColorName);
      setSet1Name(data.set1Name);
      setSet2Name(data.set2Name);
      setSet3Name(data.set3Name);
      setAColorName(data.aColorName);
      setBColorName(data.bColorName);
      setPatternName(data.patternName);
      setDesignName(data.designName);
      setSleeveOptions(data.sleeveOptions);
      setDesignOptions(data.designOptions);
      setPatternOptions(data.patternOptions);
      setColorOptions(data.colorOptions);
      setGarment(data.garment);
      setCollectionId(data.designPack);
    };

    fetching();
  }, [dispatch, match.params.id]);

  return (
    <MainScreen title="Edit Item">
      <Card>
        <Card.Header>Edit Item</Card.Header>
        <div style={{ width: "70%", margin: "auto" }}>
          <Item
            garment={garment}
            sleeve={sleeve}
            baseColor={baseColor}
            patternColor={patternColor}
            ssOrLs={ssOrLs}
            topOrShorts={topOrShorts}
            logosA={logosA}
            logosB={logosB}
            logosC={logosC}
            logosD={logosD}
            logosE={logosE}
            logosF={logosF}
            logosG={logosG}
            set1Color={set1Color}
            set2Color={set2Color}
            set3Color={set3Color}
            aColor={aColor}
            bColor={bColor}
            pattern={pattern}
            design={design}
            club={club}
            breakPath={breakPath}
            backgroundTone1={backgroundTone1}
            backgroundTone2={backgroundTone2}
            backgroundTone3={backgroundTone3}
            backgroundTone4={backgroundTone4}
            backgroundTone5={backgroundTone5}
            backgroundTone6={backgroundTone6}
            backgroundTone7={backgroundTone7}
            backgroundTone8={backgroundTone8}
            backgroundTone9={backgroundTone9}
            backgroundTone10={backgroundTone10}
            backgroundTone12={backgroundTone12}
            backgroundTone13={backgroundTone13}
            backgroundTone14={backgroundTone14}
            backgroundTone15={backgroundTone15}
          />
        </div>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <div style={{ display: "inline-block" }}>
              <GarmentSelect
                options={garments}
                currentOption={garmentName}
                setFunction={getGarmentProperties}
                title="Garment "
              />

              <SleeveSelect
                options={sleeveOptions}
                currentOption={sleeve}
                setFunction={setSleeve}
                title="Sleeve "
              />

              <DesignSelect
                options={designOptions}
                currentOption={designName}
                setFunction={designChange}
                secondFunction={setDesign}
                title="Design "
              />

              <PatternSelect
                options={patternOptions}
                currentOption={patternName}
                setFunction={patternChange}
                secondFunction={setPattern}
                title="Pattern "
              />
            </div>

            <ColourTabs
              options={colorOptions}
              baseColorName={baseColorName}
              aColorName={aColorName}
              bColorName={bColorName}
              set1ColorName={set1ColorName}
              set2ColorName={set2ColorName}
              set3ColorName={set3ColorName}
              baseColorChange={baseColorChange}
              aColorChange={aColorChange}
              bColorChange={bColorChange}
              set1ColorChange={set1ColorChange}
              set2ColorChange={set2ColorChange}
              set3ColorChange={set3ColorChange}
              set1Name={set1Name}
              set2Name={set2Name}
              set3Name={set3Name}
            />

            <div>
              {loading && <Loading size={50} />}
              <Button type="submit" className="mt-3" variant="primary">
                Update Item
              </Button>
              <Button
                className="mx-2 mt-3"
                onClick={cancelHandler}
                variant="danger"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default SingleItem;
