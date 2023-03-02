import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">اخر العروض</p>
        <h3>{heroBanner.product}</h3>
      </div>
      <div>

      <Link href={`/product/${heroBanner.product}`}>
        <button type="button" > {heroBanner.buttonText}</button>
      </Link>
        <img src={urlFor(heroBanner.image)} alt="chair" className="hero-banner-image"/>
      <div className='desc'>
      <h5>الوصف</h5>
      <p>وصف</p>
      </div>
      </div>
    </div>
  )
}

export default HeroBanner