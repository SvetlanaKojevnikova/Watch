import axios from "../../axios";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const Popup = ({ active, setActive, getAllProducts }) => {
  const addProductHandler = (e) => {
    e.preventDefault();
    axios
      .post("/products", {
        image: e.target[0].value,
        title: e.target[1].value,
        price: e.target[2].value,
      })
      .then(() => {
        getAllProducts();
        setActive(false);
        toast("Ты успешно добавил продукт");
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
      })
      .catch(() => toast("Ты не смог добавить продукт"));
  };
  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) {
          setActive(false);
        }
      }}
      className={`overlay ${active ? "overlay_active" : ""}`}
    >
      <form className="popup" onSubmit={(e) => addProductHandler(e)}>
        <span onClick={() => setActive(false)} className="popup__cross">
          <RxCross2 />
        </span>
        <label className="popup__label">Фотография:</label>
        <input className="popup__input" id="img" type="text" />
        <label className="popup__label">Название:</label>
        <input className="popup__input" id="title" type="text" />
        <label className="popup__label">Цена:</label>
        <input className="popup__input" id="price" type="text" />
        <button className="popup__btn" type="submit">
          Добавить продукт
        </button>
      </form>
    </div>
  );
};

export default Popup;
