import React from "react";
import { products } from "../../products";
import Product from "./Product";
import { useState } from "react";
import Popup from "../Popup/Popup";

const Check = () => {
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const [active,setActive]=useState(false)


  const searchProductsFilterAfter = products.filter((product, id) =>
    product.title.toUpperCase().includes(search.toUpperCase())
  ).length;

  return (
    <section className="check">
      <div className="container">
        <div className="check__contant">
          <div className="check__top">
            <h2 className="check__title">Check also</h2>
            <button className="popup__btn" type="button" onClick={()=>setActive(true)}>Добавить товар</button>
            <div   className="check__rigth">
              <input
                value={search}
                className="check__search"
                type="search"
                onChange={(e) => {
                  setSearch(e.target.value), setCount(1);
                }}
              />
            
              <a className="check__link" href="">
                <svg
                  width="72"
                  height="24"
                  viewBox="0 0 72 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.90723 8.95668H9.49458C9.44664 7.20952 7.9019 5.94176 5.68599 5.94176C3.49672 5.94176 1.8188 7.19354 1.8188 9.07386C1.8188 10.592 2.90545 11.4815 4.65794 11.9556L5.947 12.3072C7.11355 12.6161 8.01376 12.9996 8.01376 13.9691C8.01376 15.0344 6.99636 15.7376 5.59544 15.7376C4.32768 15.7376 3.27299 15.1729 3.17711 13.9851H1.52583C1.63237 15.9613 3.16113 17.1811 5.60609 17.1811C8.16824 17.1811 9.64373 15.8335 9.64373 13.9851C9.64373 12.0195 7.89125 11.2578 6.5063 10.9169L5.44096 10.6399C4.58869 10.4215 3.4541 10.022 3.45943 8.97798C3.45943 8.05114 4.30637 7.36399 5.6487 7.36399C6.90048 7.36399 7.79004 7.94993 7.90723 8.95668ZM15.0091 17.1651C16.7935 17.1651 18.0559 16.2862 18.4181 14.9545L16.9107 14.6829C16.623 15.4553 15.9306 15.8494 15.025 15.8494C13.6614 15.8494 12.7452 14.9652 12.7026 13.3885H18.5194V12.8239C18.5194 9.86754 16.7509 8.71165 14.8972 8.71165C12.6174 8.71165 11.1152 10.4482 11.1152 12.9624C11.1152 15.5032 12.5961 17.1651 15.0091 17.1651ZM12.7079 12.1953C12.7718 11.0341 13.6135 10.0273 14.9078 10.0273C16.1436 10.0273 16.9533 10.9435 16.9586 12.1953H12.7079ZM23.8128 17.1651C25.5972 17.1651 26.8596 16.2862 27.2219 14.9545L25.7144 14.6829C25.4268 15.4553 24.7343 15.8494 23.8287 15.8494C22.4651 15.8494 21.5489 14.9652 21.5063 13.3885H27.3231V12.8239C27.3231 9.86754 25.5546 8.71165 23.7009 8.71165C21.4211 8.71165 19.9189 10.4482 19.9189 12.9624C19.9189 15.5032 21.3998 17.1651 23.8128 17.1651ZM21.5116 12.1953C21.5756 11.0341 22.4172 10.0273 23.7116 10.0273C24.9474 10.0273 25.757 10.9435 25.7623 12.1953H21.5116ZM35.441 17.1811C36.7939 17.1811 37.5557 16.494 37.8593 15.8814H37.9232V17H39.4786V11.5668C39.4786 9.18572 37.6036 8.71165 36.3039 8.71165C34.8231 8.71165 33.4594 9.30824 32.9268 10.7997L34.4236 11.1406C34.6579 10.56 35.2545 10.0007 36.3252 10.0007C37.3532 10.0007 37.8806 10.5387 37.8806 11.4656V11.5028C37.8806 12.0835 37.284 12.0728 35.8138 12.2433C34.2638 12.4244 32.6764 12.8292 32.6764 14.6882C32.6764 16.2969 33.8856 17.1811 35.441 17.1811ZM35.7872 15.9027C34.887 15.9027 34.2371 15.4979 34.2371 14.7095C34.2371 13.8572 34.9935 13.5536 35.915 13.4311C36.4317 13.3619 37.6569 13.2234 37.8859 12.9943V14.049C37.8859 15.0185 37.1135 15.9027 35.7872 15.9027ZM43.1926 6.09091H41.6V17H43.1926V6.09091ZM46.928 6.09091H45.3353V17H46.928V6.09091Z"
                    fill="#1890FF"
                  />
                  <g clipPath="url(#clip0_2_110)">
                    <path
                      d="M63.7741 12.5941L58.6143 17.7537C58.2861 18.0821 57.7539 18.0821 57.4258 17.7537C57.0977 17.4256 57.0977 16.8935 57.4258 16.5654L61.9915 11.9999L57.426 7.43457C57.0979 7.10635 57.0979 6.57426 57.426 6.24617C57.754 5.91794 58.2862 5.91794 58.6144 6.24617L63.7742 11.4059C63.9383 11.57 64.0202 11.7849 64.0202 11.9999C64.0202 12.215 63.9381 12.43 63.7741 12.5941Z"
                      fill="#1890FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_110">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(54.6 6)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div className="check__row">
            {products
              .filter((product, id) =>
                product.title.toUpperCase().includes(search.toUpperCase())
              )
              .filter((product, id) => id < 4 * count)
              .map((product, id) => (
                <React.Fragment key={product.id}>
                  <Product
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                </React.Fragment>
              ))}
          </div>
          {!searchProductsFilterAfter && (
            <h2 className="check__underfind">
              Поданному запросу ничего не найдено
            </h2>
          )}
          {count * 4 >= products.length ? (
            <button type="button" onClick={() => setCount(1)}>
              Скрыть
            </button>
          ) : (
            <button
              style={{
                display:
                  count * 4 >= searchProductsFilterAfter
                    ? "none"
                    : "inline-block",
              }}
              type="button"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Показать еще
            </button>
          )}

          {searchProductsFilterAfter ? (
            <span>
              Показано
              {count * 4 >= searchProductsFilterAfter
                ? searchProductsFilterAfter
                : count * 4}
              из
              {searchProductsFilterAfter}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <Popup active={active} setActive={setActive}/>
    </section>
    
  );
};

export default Check;
