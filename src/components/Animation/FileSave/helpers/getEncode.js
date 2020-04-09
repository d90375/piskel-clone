import GifEncoder from "gif-encoder";
import UPNG from "upng-js";

export const getEncodeGIF = (frameList, frameRate, currentCanvasSize) => {
  const rt = 0;
  const gif = new GifEncoder(currentCanvasSize, currentCanvasSize);
  gif.writeHeader();
  gif.setFrameRate(frameRate);
  gif.setRepeat(rt);
  gif.setTransparent(0);
  frameList.forEach(e => gif.addFrame(e.data));
  gif.finish();
  const base64 = btoa(String.fromCharCode(...gif.read()));
  return `data:image/gif;base64,${base64}`;
};

export const getEncodePNG = (frameList, frameRate, currentCanvasSize) => {
  const cnum = 0;
  const imgs = frameList.map(frame => frame.data.buffer);
  const dels = Array(frameList.length).fill(1000 / frameRate);
  const pngArrayBuffer = UPNG.encode(imgs, currentCanvasSize, currentCanvasSize, cnum, dels);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(pngArrayBuffer)));
  return `data:image/gif;base64,${base64}`;
};
