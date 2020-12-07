import React from "react";
import "css/Buttons.css";

export function Buttons(state) {
  let { bgColor, fontSize, fontFamily, text, pastedURL, link } =
    state.init || {};

  const handleSaveImg = () => {
    let canvas = document.getElementById("canvas");
    const dataURL = canvas.toDataURL({
      width: canvas.width,
      height: canvas.height,
      left: 0,
      top: 0,
      format: "png",
    });
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyHTML = () => {
    let canvas = document.getElementById("canvas");
    let dataURL = canvas.toDataURL("image/png");
    navigator.clipboard.writeText(
      `<a href=${link}><img src="${dataURL}"/></a>`
    );
  };

  const handleCopyJSON = () => {
    let json = {};
    json.backgroundColor = bgColor?.hex;
    json.fontSize = fontSize;
    json.fontFamily = fontFamily;
    json.text = text;
    json.imageUrl = pastedURL;
    json.link = link;
    let jsonString = JSON.stringify(json);
    navigator.clipboard.writeText(jsonString);
  };

  return (
    <div className="button__export d-flex my-2">
      <button
        type="button"
        className="btn btn-success btn-save"
        onClick={handleSaveImg}
      >
        Сохранить как png
      </button>
      <button
        type="button"
        className="btn btn-success btn-copy"
        onClick={handleCopyHTML}
      >
        Скопировать тег
      </button>
      <button
        type="button"
        className="btn btn-success btn-json"
        onClick={handleCopyJSON}
      >
        Скопировать JSON
      </button>
    </div>
  );
}
