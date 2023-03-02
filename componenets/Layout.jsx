import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>
          موقع تجريبي
        </title>
      </Head>
      <header>
        <Navbar/>
      </header>
        <main className='main-container'>
        {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  )
}

export default layout