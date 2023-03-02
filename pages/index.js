import React from 'react'
import {Cart ,Footer, FooterBanner, HeroBanner,Layout,Product, Navbar} from 'componenets'
import {client} from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      
      <div>
        <h2 className='products-heading'> المنتجات الاكثر مبيعا</h2>
        <p>كل المنتجات على هذا الموقع وهمية </p>
      </div>
      <div className='products-container'>
      {products?.map((product)=> <Product key={product._id} product={product}/>)
      }
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[1]}/>

    </div>
  )
}
export const getServerSideProps = async()=>{
  const ProductQuery='*[_type=="product"]';
  const products = await client.fetch(ProductQuery);
  const BannerQuery='*[_type=="banner"]';
  const bannerData = await client.fetch(BannerQuery);
  return {
    props:{
      products,
      bannerData
    }
  }
}
export default Home