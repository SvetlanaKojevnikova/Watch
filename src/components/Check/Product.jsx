import { toast } from "react-toastify";
import axios from "../../axios";

const Product = ({getAllProducts, product,basket,setBasket}) => {
  const {id,title,price,image }=product

  const deleteProductHandler=(id)=>{
    axios.delete(`/products/${id}`)
    .then(()=>{getAllProducts()
    toast("Ты успешно удалил продукт")}).catch(()=>toast("Не удалось удалить продукт "))
  }
  return (
    <div className="check__card">
      <img className="check__card-img" src={image} alt="title" />
      <h3 className="check__card-title">{title}</h3>
      <p className="check__card-price">
        {price > 0 ? `$${price}.00` : "Free*"}
      </p>
      <div className="check__card-buttons">
        <button disabled={basket.findIndex((el)=>el.id===product.id)>-1} onClick={()=>setBasket([...basket,product])} className="check__card-button" type="button">
          {price > 0 ? "Buy" : "Apply"}{" "}
        </button>
        <button onClick={()=>deleteProductHandler(id)}
          style={{ background: "red" }}
          className="check__card-button"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
