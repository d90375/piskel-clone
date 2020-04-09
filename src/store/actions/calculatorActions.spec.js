import * as f from "./frameList";
import * as at from "../actionTypes";
import * as c from "./canvas";
import * as t from "./tools";
import * as a from "./authentication";


describe("Action tests", () => {
  it("set frame rate for animation", () => {
    const rate = 1;
    const data = f.setFrameRate({ rate });
    expect(data.type).toEqual(at.FRAME_RATE);
    expect(data.payload.rate).toEqual(rate);
  });
  it("should create an action to add frame", () => {
    const frame = {};
    const data = f.addFrame({ frame });
    expect(data.type).toEqual(at.FRAME_ADD);
    expect(data.payload.frame).toEqual(frame);
  });
  it("update frame without imageData", () => {
    const canvas = {};
    const data = f.updateFrame({ canvas });
    expect(data.type).toEqual(at.FRAME_UPDATE);
    expect(data.payload.canvas).toEqual(canvas);
  });
  it("remove frame", () => {
    const id = 0;
    const data = f.removeFrame({ id });
    expect(data.type).toEqual(at.FRAME_REMOVE);
    expect(data.payload.id).toEqual(id);
  });
  it("copy frame", () => {
    const id = 0;
    const data = f.copyFrame({ id });
    expect(data.type).toEqual(at.FRAME_COPY);
    expect(data.payload.id).toEqual(id);
  });
  it("ctx", () => {
    const ctx = {};
    const data = c.setCtx({ ctx });
    expect(data.type).toEqual(at.SET_CTX);
    expect(data.payload.ctx).toEqual(ctx);
  });
  it("draw boolean", () => {
    const draw = true;
    const data = c.setDraw({ draw });
    expect(data.type).toEqual(at.SET_DRAW);
    expect(data.payload.draw).toEqual(draw);
  });
  it("set canvas size", () => {
    const size = [];
    const data = c.setCanvasSize({ size });
    expect(data.type).toEqual(at.SET_CANVAS_SIZE);
    expect(data.payload.size).toEqual(size);
  });
  it("set tool", () => {
    const tool = "";
    const data = t.setTool({ tool });
    expect(data.type).toEqual(at.SET_TOOL);
    expect(data.payload.tool).toEqual(tool);
  });
  it("set pen size", () => {
    const penSize = 1;
    const data = t.setPenSize({ penSize });
    expect(data.type).toEqual(at.SET_PEN_SIZE);
    expect(data.payload.penSize).toEqual(penSize);
  });
  it("set primary color", () => {
    const primary = "#FFFFFF";
    const data = t.setPrimary({ primary });
    expect(data.type).toEqual(at.SET_PRIMARY);
    expect(data.payload.primary).toEqual(primary);
  });
  it("set secondary color", () => {
    const secondary = "#000000";
    const data = t.setSecondary({ secondary });
    expect(data.type).toEqual(at.SET_SECONDARY);
    expect(data.payload.secondary).toEqual(secondary);
  });
});
