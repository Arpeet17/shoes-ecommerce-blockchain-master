import React from 'react'

const Body = () => {
  return (
    
        
         <>
            <Login/>
            <Navbar/>
            <Cart />
            <main className='flex flex-col gap-16 relative'>
              <Hero heroapi={heroapi} />
              <Sales endpoint={popularsales} ifExists />
              <FlexContent endpoint={highlight} ifExists />
              <Sales endpoint={toprateslaes} />
              <FlexContent endpoint={sneaker} />
              <Stories story={story} />
            </main>
            <Footer footerAPI={footerAPI} />
         </>
        
      
  )
}

export default Body;
