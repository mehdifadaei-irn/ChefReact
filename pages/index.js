import Head from 'next/head'

const Home = () => {
  return (
      <>
        HeroBanner

        <div>
          <h2>best selling Products</h2>
          <p>Speakers of many variations</p>
        </div>

        <div>
            {['Product1', 'Product2'].map((p)=>
                p
            )}
        </div>

          Footer
      </>
  )
}

export default Home;