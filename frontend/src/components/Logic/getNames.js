export function getNames(items) {
  var p = 0;
  var r = 0;
  var t = 0;
  var ps = 0;
  var oh = 0;
  var sh = 0;
  var s = 0;
  var qz = 0;
  var pj = 0;
  var pf = 0;
  var prs = 0;
  var rrs = 0;
  var ts = 0;
  var output = [];

  if (items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].garment === "prorugbyshirt") {
        p++;
        output.push("Pro Rugby Shirt " + p);
      } else if (items[i].garment === "profootballshirt") {
        pf++;
        output.push("Football Shirt " + pf);
      } else if (items[i].garment === "replicarugbyshirt") {
        r++;
        output.push("Replica Rugby Shirt " + r);
      } else if (items[i].garment === "trainingtshirt") {
        t++;
        output.push("T-shirt " + t);
      } else if (items[i].garment === "polo") {
        ps++;
        output.push("Polo " + ps);
      } else if (items[i].garment === "ohhoodie") {
        oh++;
        output.push("OH Hoodie " + oh);
      } else if (items[i].garment === "sleevelesshoodie") {
        sh++;
        output.push("Sleeveless Hoodie" + sh);
      } else if (items[i].garment === "singlet") {
        s++;
        output.push("Singlet " + s);
      } else if (items[i].garment === "qzjacket") {
        qz++;
        output.push("Quarter Zip Jacket " + qz);
      } else if (items[i].garment === "pjacket") {
        pj++;
        output.push("Presentation Jacket " + pj);
      } else if (items[i].garment === "prorugbyshorts") {
        prs++;
        output.push("Pro Rugby Shorts " + prs);
      } else if (items[i].garment === "replicarugbyshorts") {
        rrs++;
        output.push("Replica Rugby Shorts " + rrs);
      } else if (items[i].garment === "trainingshorts") {
        ts++;
        output.push("Training Shorts " + ts);
      } else if (items[i].garment === "profootballshorts") {
        ts++;
        output.push("Football Playing Shorts " + ts);
      }
    }
  }

  return output;
}
