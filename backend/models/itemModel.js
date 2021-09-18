const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    garment: {
      type: String,
    },
    topOrShorts: {
      type: String,
    },
    ssOrLs: {
      type: String,
    },
    backgroundTone1: {
      type: String,
    },
    backgroundTone2: {
      type: String,
    },
    backgroundTone3: {
      type: String,
    },
    backgroundTone4: {
      type: String,
    },
    backgroundTone5: {
      type: String,
    },
    backgroundTone6: {
      type: String,
    },
    backgroundTone7: {
      type: String,
    },
    backgroundTone8: {
      type: String,
    },
    backgroundTone9: {
      type: String,
    },
    backgroundTone10: {
      type: String,
    },
    backgroundTone12: {
      type: String,
    },
    backgroundTone13: {
      type: String,
    },
    backgroundTone14: {
      type: String,
    },
    backgroundTone15: {
      type: String,
    },
    logosA: {
      type: String,
    },
    logosB: {
      type: String,
    },
    logosC: {
      type: String,
    },
    logosD: {
      type: String,
    },
    logosE: {
      type: String,
    },
    logosF: {
      type: String,
    },
    logosG: {
      type: String,
    },
    set1Color: {
      type: String,
    },
    set2Color: {
      type: String,
    },
    set3Color: {
      type: String,
    },
    baseColor: {
      type: String,
    },
    patternColor: {
      type: String,
    },
    aColor: {
      type: String,
    },
    bColor: {
      type: String,
    },
    breakPath: {
      type: String,
    },
    pattern: {
      type: String,
    },
    design: {
      type: String,
    },
    sleeve: {
      type: String,
    },
    club: {
      type: String,
    },
    logo1: {
      type: String,
    },
    logo2: {
      type: String,
    },
    logo3: {
      type: String,
    },
    logo4: {
      type: String,
    },
    logo5: {
      type: String,
    },
    logo6: {
      type: String,
    },
    logo7: {
      type: String,
    },
    logo8: {
      type: String,
    },
    logo9: {
      type: String,
    },
    logo10: {
      type: String,
    },
    logo12: {
      type: String,
    },
    logo13: {
      type: String,
    },
    logo14: {
      type: String,
    },
    logo15: {
      type: String,
    },
    garmentName: {
      type: String,
    },
    baseColorName: {
      type: String,
    },
    set1ColorName: {
      type: String,
    },
    set2ColorName: {
      type: String,
    },
    set3ColorName: {
      type: String,
    },
    set1Name: {
      type: String,
    },
    set2Name: {
      type: String,
    },
    set3Name: {
      type: String,
    },
    aColorName: {
      type: String,
    },
    bColorName: {
      type: String,
    },
    patternName: {
      type: String,
    },
    designName: {
      type: String,
    },
    sleeveOptions: {
      type: Array,
    },
    colorOptions: {
      type: Array,
    },
    patternOptions: {
      type: Array,
    },
    designOptions: {
      type: Array,
    },
    designPack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
  },
  {
    timestamps: true,
  }
);

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
