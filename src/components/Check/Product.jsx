
const Product = ({title,price,image}) => {
  return (
    <div className="check__card">
              <img className="check__card-img" src={image} alt="title" />
              <h3 className="check__card-title">{title}</h3>
              <p className="check__card-price">{price>0 ? `$${price}.00`:'Free*'}</p>
              <button className="check__card-button" type="button">{price>0 ? 'Buy':"Apply"}
               
              </button>
            </div>)
}

export default Product