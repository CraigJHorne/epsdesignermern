export function designBreakChange(
  logosD,
  clubObject,
  designBreakPath,
  setBreakPath
) {
  var clubBreak = "";
  if (logosD === "playing") {
    clubBreak = clubObject.playingDesignBreak;
  } else if (logosD === "playing") {
    clubBreak = clubObject.tshirtDesignBreak;
  }

  if (clubBreak === "square") {
    if (
      designBreakPath === "square" ||
      designBreakPath === "rectangle" ||
      designBreakPath === "thin"
    ) {
      setBreakPath("squarebreakpath");
    } else {
      setBreakPath("nobreakpath");
    }
  } else if (clubBreak === "rectangle") {
    if (designBreakPath === "rectangle" || designBreakPath === "thin") {
      setBreakPath("rectanglebreakpath");
    } else {
      setBreakPath("nobreakpath");
    }
  } else if (clubBreak === "thin") {
    if (designBreakPath === "thin") {
      setBreakPath("thinbreakpath");
    } else {
      setBreakPath("nobreakpath");
    }
  } else if (clubBreak === "no") {
    setBreakPath("nobreakpath");
  }
}
