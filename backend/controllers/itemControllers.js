const asyncHandler = require("express-async-handler");
const Item = require("../models/itemModel");

const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({ designPack: req.params.id });
  res.json(items);
});

const createItems = asyncHandler(async (req, res) => {
  const {
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
    patternOptions,
    collection,
  } = req.body;

  if (!garment) {
    res.status(400);
    throw new Error("Please fill all the Fields");
  } else {
    const item = new Item({
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
      patternOptions,
      designPack: collection,
    });

    const createdItem = await item.save();

    res.status(201).json(createdItem);
  }
});

const getItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

const updateItem = asyncHandler(async (req, res) => {
  const {
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
    patternOptions,
  } = req.body;

  const item = await Item.findById(req.params.id);

  if (item) {
    item.garment = garment;
    item.sleeve = sleeve;
    item.baseColor = baseColor;
    item.patternColor = patternColor;
    item.aColor = aColor;
    item.bColor = bColor;
    item.set1Color = set1Color;
    item.set2Color = set2Color;
    item.set3Color = set3Color;
    item.ssOrLs = ssOrLs;
    item.topOrShorts = topOrShorts;
    item.logosA = logosA;
    item.logosB = logosB;
    item.logosC = logosC;
    item.logosD = logosD;
    item.logosE = logosE;
    item.logosF = logosF;
    item.logosG = logosG;
    item.pattern = pattern;
    item.design = design;
    item.club = club;
    item.breakPath = breakPath;
    item.backgroundTone1 = backgroundTone1;
    item.backgroundTone2 = backgroundTone2;
    item.backgroundTone3 = backgroundTone3;
    item.backgroundTone4 = backgroundTone4;
    item.backgroundTone5 = backgroundTone5;
    item.backgroundTone6 = backgroundTone6;
    item.backgroundTone7 = backgroundTone7;
    item.backgroundTone8 = backgroundTone8;
    item.backgroundTone9 = backgroundTone9;
    item.backgroundTone10 = backgroundTone10;
    item.backgroundTone12 = backgroundTone12;
    item.backgroundTone13 = backgroundTone13;
    item.backgroundTone14 = backgroundTone14;
    item.backgroundTone15 = backgroundTone15;
    item.logo1 = logo1;
    item.logo2 = logo2;
    item.logo3 = logo3;
    item.logo4 = logo4;
    item.logo5 = logo5;
    item.logo6 = logo6;
    item.logo7 = logo7;
    item.logo8 = logo8;
    item.logo9 = logo9;
    item.logo10 = logo10;
    item.logo12 = logo12;
    item.logo13 = logo13;
    item.logo14 = logo14;
    item.logo15 = logo15;
    item.garmentName = garmentName;
    item.baseColorName = baseColorName;
    item.set1ColorName = set1ColorName;
    item.set2ColorName = set2ColorName;
    item.set3ColorName = set3ColorName;
    item.set1Name = set1Name;
    item.set2Name = set2Name;
    item.set3Name = set3Name;
    item.aColorName = aColorName;
    item.bColorName = bColorName;
    item.patternName = patternName;
    item.designName = designName;
    item.sleeveOptions = sleeveOptions;
    item.colorOptions = colorOptions;
    item.designOptions = designOptions;
    item.patternOptions = patternOptions;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } else {
    res.status(404);
    throw newError("Note not found");
  }
});

const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    await item.remove();
    res.json({ message: "Item Removed" });
  } else {
    res.status(404);
    throw newError("Note not found");
  }
});

module.exports = {
  getItems,
  createItems,
  getItemById,
  updateItem,
  deleteItem,
};
