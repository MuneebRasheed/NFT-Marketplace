import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import NftCard from './NFTCard/NftCard.js'
import Slider from "react-slick";
import Tab from './Tab';
import '../components/IntroPage/Intro.css'
import img from '../images/_Image_.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  const settings = {

    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,

  };
  const settings1 = {

    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

  };
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount()
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      if (!item.sold) {
        // get uri url from nft contract
        let uri = await nft.tokenURI(item.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 

        // https://ipfs.io/ipfs/QmNUTGGCji69Gg4vpnr7DupVuyrhvJPLFejwiEcczYZEq7
        console.log("uri", uri);
        uri = uri.replace("ipfs.infura.io", "infura-ipfs.io");
        console.log("uri1", uri);
        const response = await fetch(uri)

        const metadata = await response.json()
        console.log("response", metadata);
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        // const totalPrice = 9;
        // Add item to items array
        metadata.image = metadata.image.replace("ipfs.infura.io", "infura-ipfs.io");
        console.log("metadata", metadata.image)
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        })
      }
    }
    setLoading(false)
    setItems(items)
  }

  const buyMarketItem = async (item) => {
    console.log("item.totalPrice", item.totalPrice);
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }

  useEffect(() => {
    loadMarketplaceItems()
  }, [])
  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )


  return (
    <div className="flex justify-center" >
      {items.length > 0 ?
        <div>

          <div  >
            <div className='introImg'>

            </div>

            <div className='introText'>

              <h1><span style={{ color: "#098A45" }}>BUTO</span> MarketPlace</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                .</p>
              <button className='Introbtn'>Learn More</button>


            </div>
            <section className='slidesection' >
              <div style={{ paddingTop: '30px', paddingBottom: '40px', color: 'white' }}><h1>FEATURES NFTs</h1></div>
              <div className='home-slide'>
                <Swiper
                  slidesPerView={3}
                  // spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {items.map((item, idx) => (
                    <div  >
                      <SwiperSlide><Card style={{ display: 'flex', alignItems: 'center', borderRadius: '15px' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body color="secondary">
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>

                          <Button onClick={() => buyMarketItem(item)} size="lg" style={{ backgroundColor: '#098A45', marginTop: '10px', marginBottom: '10px' }} >
                            {ethers.utils.formatEther(item.totalPrice)} ETH
                          </Button>

                        </Card.Footer>
                      </Card></SwiperSlide>
                    </div>
                  ))}

                </Swiper>
              </div>

              <div style={{ paddingTop: '30px', paddingBottom: '30px' }}></div>
            </section>

          </div>


          <Tab />
        </div > : (
          <main style={{ padding: "1rem 0", marginBottom: '386px' }}>
            <h2>No listed assets</h2>
          </main>
        )}

    </div >
  );
}
export default Home