import React, { useEffect } from "react";
import { fabric } from "fabric";
import { ColorLuminance } from "./PreviewFunctions";
import "css/Preview.css";

let canvas = null;
let rect = null;
let textbox = null;
const [width, height] = [420, 300];

export function Preview(state) {
  let { bgColor, fontSize, fontFamily, pastedURL, text } = state.init || {};

  useEffect(() => {
    canvas = new fabric.Canvas(document.getElementById("canvas"), {});
    rect = new fabric.Rect({
      selectable: false,
      hoverCursor: "default",
    });
    textbox = new fabric.Text("Avito", {
      left: canvas.width / 3,
      top: canvas.height / 4,
      width: canvas.width / 2,
      editable: false,
    });
  }, []);

  useEffect(() => {
    rect.width = width;
    rect.height = height;
    textbox.fontSize = fontSize;
    textbox.text = text;
    textbox.fontFamily = fontFamily;
    rect.setGradient("fill", {
      x1: 0,
      y1: 0,
      x2: rect.width,
      y2: rect.height,
      colorStops: {
        0: ColorLuminance(bgColor.hex, -0.7),
        0.5: bgColor.hex,
        1: ColorLuminance(bgColor.hex, 0.7),
      },
    });

    fabric.util.loadImage(
      pastedURL,
      (img) => {
        if (img == null) {
          alert("Ошибка CORS либо ссылка на файл длинная, попробуйте заново");
          return;
        }

        const image = new fabric.Image(img);
        image.set({ left: 25, top: 75 }).scale(0.6);
        let objs = canvas.getObjects();
        if (objs.length) {
          objs.forEach((e) => {
            if (e && e.type === "image") {
              e._element.src = pastedURL;
              canvas.renderAll();
            }
          });
        } else {
          canvas.add(rect);
          canvas.add(image).setActiveObject(image);
          canvas.add(textbox);
        }
      },
      null,
      "anonymous"
    );
    canvas.renderAll();
  }, [bgColor, pastedURL, fontSize, fontFamily, text]);

  return <canvas id="canvas" width={width} height={height} />;
}
