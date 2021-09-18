export function logoToneChange(
  baseColor,
  aColor,
  bColor,
  colorOptions,
  clubObject,
  backgroundColor,
  logoType,
  setBackgroundTone,
  garmentType,
  breakPath
) {
  // get the relevant background color Hex code

  var areaColor = "";
  if (backgroundColor === "baseColor") {
    areaColor = baseColor;
  } else if (backgroundColor === "aColor") {
    areaColor = aColor;
  }
  if (backgroundColor === "bColor") {
    areaColor = bColor;
  }

  // set background color to baseColor Hex if its for logo6 and theres a breakpath

  if (logoType === "playinglogo6" || logoType === "tshirtlogo6") {
    if (breakPath !== "no") {
      areaColor = baseColor;
    }
  }

  // get the tone for that background color hex

  areaColor = colorOptions.filter((color) => color.value === areaColor)[0];
  areaColor = areaColor.tone;

  // if the logo doesn't appear on that shirt , make the tone white (had to exlcude logo1 as it uses the garmentType that desn't fully apply)

  if (garmentType === "none" && logoType !== "alllogo1") {
    logoType = "none";
    areaColor = "white";
  }

  // set the background tone

  setBackgroundTone(clubObject[logoType][areaColor]);
}
