import { convertHexToRGB, convertRgbToHex } from "./utils";

describe("color converter test", () => {
  it("convert rgb to hex", () => {
    const r = 0;
    const g = 51;
    const b = 255;
    expect(convertRgbToHex([r, g, b])).toEqual("#0033ff");
  });
  it("convert hex to rgb", () => {
    const color = "#0033ff";
    expect(convertHexToRGB(color)).toEqual([0, 51, 255]);
  });
});
