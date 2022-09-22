import React from 'react'
import Link from 'next/link'
const index: React.FC = () => {
  return (
    <div> Dealer
    <ul>
          <li>
            <Link href="/" >Home</Link>
          </li>
          <li>
            <Link href="/dealer" >Dealer</Link>
          </li>
          <li>
            <Link href="/dealer/products" >Products</Link>
          </li>
        </ul>  
    </div>
  )
}

export default index