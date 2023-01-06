import axios from "../../axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Basket = ({ active, setActive, basket, setBasket }) => {
  const [order, setOrder] = useState(false);
  const[name,setName]=useState('')
  const[phone,setPhone]=useState('')
  const addOrder=()=>{
    axios.post('/orders',{
      name:name,
      phone:phone,
      order:basket
    }).then(()=>{
      setActive(false)
      setName(''),
      setPhone(''),
      setBasket([]),
      toast('Заказ успешно совершен')

    }).catch((err)=>toast("Не удалось совершить покупку :("))
  }

  console.log(basket);
  return (
    <div
      onClick={(e) => {
        if (e.target.className.includes("active")) {
          setActive(false);
        }
      }}
      className={`overlay2 ${active ? "overlay2__active" : ""}`}
    >
      <div className="popup2">
        <h2 className="popup2__title">Корзина</h2>
        <div className="popup2__row">
          {basket.map((product, idx) => (
            <div key={product.id} className="popup2__card">
              <img className="popup2__img" src={product.image} alt="" />
              <div className="popup2__info">
                <p className="popup2__name">{product.title}</p>
                <p className="popup2__price">{product.price}$.</p>
              </div>

              <button
                onClick={() => {
                  setBasket(basket.filter((el) => el.id != product.id));
                  if (basket.length == 1) {
                    setActive(false);
                  }
                }}
                className="popup2__btn"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="popup2__total">
          <div className="popup2__total-info">
            <p className="popup2__total-sum">Итого:</p>
            <p className="popup2__total-price">
              {basket.reduce((acc, rec) => +acc + +rec.price, 0)}$.
            </p>
          </div>
          <div className="popup2__total-info">
            <p className="popup2__total-sum">Налог 5%</p>
            <p className="popup2__total-price">
              {(basket.reduce((acc, rec) => +acc + +rec.price, 0) / 100) * 5} $.
            </p>
          </div>
          <div style={{display:order? "flex" : "none" }} className="popup2__inputs">
            <input onChange={(e)=>setName(e.target.value)} value={name}className="popup2__input" type="text" placeholder="name" />
            <input onChange={(e)=>setPhone(e.target.value)}value={phone}className="popup2__input" type="tel" placeholder="tel" />
          </div>

          <button onClick={()=>{
            if (!order){setOrder(true)}else{
              addOrder()
            }
             
          }} className="popup2__total-btn">{order?"Заказать":"Оформить заказ"}</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
