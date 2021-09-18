export function reorderItems(items) {
  var output = [];

  if (items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "prorugbyshirt") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "prorugbyshorts") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "replicarugbyshirt") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "replicarugbyshorts") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "profootballshirt") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "profootballshorts") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "trainingtshirt") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "singlet") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "trainingshorts") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "polo") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "ohhoodie") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "sleevelesshoodie") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "qzjacket") {
        output.push(items[i]);
      }
    }

    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "pjacket") {
        output.push(items[i]);
      }
    }
  }

  return output;
}
