import { Product } from "../../componenets";
import { client, urlFor } from "../../lib/client";
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import {useStateContext} from "../../context/StateContext"

import 'react-toastify/dist/ReactToastify.css';
  
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0)
  const {decQty, incQty, qty, onAdd} = useStateContext();
  return (
    <div>
      
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              width={"350px"}
              height={"350px"}
              alt="product"
            />
          </div>
           <div className="small-images-container">
                  { image?.map((item,i)=>{
                      <img key={i} width={"350px"} className={i===index?"small-image selected-image":"small-image"} 
                      height={"350px"}  src={urlFor(item&& item[i])} alt="product-image" onMouseEnter={()=> setIndex(i)} />
                    }) }
                </div> 
          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4>تفاصيل:</h4>
            <p>{details}</p>
            <p className="price">${price}</p>
            <div className="quantity">
              <h3>الكمية:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick={()=>onAdd(product, qty)}>
                اضف الى العربة
              </button>
              <Link href='/success'>
              <button type="button" className="buy-now">
                اشتري الان
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>منتجات قد تعجبك</h2>
        <div className="marquee">
          <div className="maylike-products-container">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
       </div>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type == "product"]
  {slug {
    current
  }}`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const productsQuery = '*[_type=="product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
