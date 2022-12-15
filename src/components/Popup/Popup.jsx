import { RxCross2 } from "react-icons/rx";
const Popup = ({active, setActive}) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.className.includes("active")) {
          setActive(false);
        }
      }}
      className={`overlay ${active ? "overlay_active" : ""}`}
    >
      <form className="popup">
        <span onClick={() => setActive(false)} className="popup__cross">
          <RxCross2 />
        </span>
        <label className="popup__label">Фотография:</label>
        <input className="popup__input" id="img" type="text" />
        <label className="popup__label">Название:</label>
        <input className="popup__input" id="title" type="text" />
        <label className="popup__label">Цена:</label>
        <input className="popup__input" id="price" type="text" />
        <button className="popup__btn" type="button">
          Добавить продукт
        </button>
      </form>
    </div>
  );
};

export default Popup;
