import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'
const Product = ({product:{image, name ,slug, price}}) => {
  
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} alt={name} width={250} height={250} 
          className='product-image'/>
      <h3 className='product-name'>{name}</h3>
      <p className='product-price'>
        <strong>السعر:</strong> ${price}
      </p>
        </div>
      </Link>
    </div>
  )
}

export default Product