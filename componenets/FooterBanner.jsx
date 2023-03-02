import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({footerBanner:{product, buttonText,image }}) => {
  return (
    <div className='footer-banner-container'>
      <div className='footer-desc'>
        <div className='left'>
          <p>تخفيض</p>
          <h3>{product}</h3>
          <p>تجريب</p>
        </div>
        <div className='right'>
          <img src={urlFor(image)} alt="footer-image" width={"250px"} height={"250px"} className='footer-banner-image'/>
          <Link href={`/product/${product}`}>
        <button type="button" className='btn'> {buttonText}</button>
      </Link>
        </div>
    </div>
    </div>
  )
}

export default FooterBanner