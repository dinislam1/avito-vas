import React from "react";
import { SketchPicker } from "react-color";
import "css/Panel.css";

export function Panel(state) {
  let { bgColor, fontSize = 8, fontFamily, url, text, link } = state.init || {};
  let { handleText, handleSet, handleChange, handleNewLogo } = state.func || {};

  const urlLoader = (
    <div className="text-bar d-flex flex-column">
      <input
        className="form-control"
        value={url}
        name="url"
        onChange={handleSet}
        placeholder="https:// или data:image/"
      ></input>
      <label>Загрузите URL/DataURL изображения</label>
      <button
        type="button"
        className="btn btn-primary my-2"
        onClick={handleNewLogo}
        name="pastedURL"
      >
        <i className="fas fa-download" />
        &nbsp; Загрузить
      </button>
    </div>
  );
  const showPicker = (
    <SketchPicker
      color={bgColor}
      onChangeComplete={handleChange}
      disableAlpha={true}
    />
  );
  let size = Array.from(Array(35).keys());
  let options = size.map((item) => (
    <option key={item} value={item + 8}>
      {item + 8}
    </option>
  ));
  let fonts = [
    "Times New Roman",
    "Gabriola",
    "Cursive",
    "Franklin Gothic",
    "Impact",
  ];
  let optionFonts = fonts.map((item) => <option key={item}>{item}</option>);

  const showText = (
    <div className="text-bar">
      <textarea
        className="form-control text-field"
        value={text}
        name="text"
        onChange={handleText}
        placeholder="Введите текст и нажмите 'Напечатать'"
      ></textarea>
      <label>Текст</label>
      <input
        className="form-control"
        onChange={handleSet}
        name="link"
        value={link}
        placeholder="https://"
      ></input>
      <label>Ссылка для баннера</label>
      <select
        className="form-control font-size"
        onChange={handleSet}
        value={fontSize.toString()}
        name="fontSize"
      >
        {options}
      </select>
      <label>Размер шрифта</label>
      <select
        className="form-control"
        onChange={handleSet}
        value={fontFamily}
        name="fontFamily"
      >
        {optionFonts}
      </select>
      <label>Шрифт</label>
    </div>
  );

  return (
    <div className="panel-show d-flex flex-column">
      {urlLoader}
      {showPicker}
      {showText}
    </div>
  );
}
