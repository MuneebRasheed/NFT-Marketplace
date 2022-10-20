import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card } from 'react-bootstrap';
import NftCard from './NFTCard/NftCard'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function renderSoldItems(items) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <>
      <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Sold</h2>
      <div className='custom' style={{ marginLeft: '80px', marginRight: '80px' }}>
        <Swiper
          slidesPerView={3}

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
              <SwiperSlide><NftCard description={"19"} item={item} /></SwiperSlide>
            </div>
          ))}

        </Swiper>


      </div>
    </>
  )
}

export default function MyListedItems({ marketplace, nft, account }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  const [loading, setLoading] = useState(true)
  const [listedItems, setListedItems] = useState([])
  const [soldItems, setSoldItems] = useState([])

  const loadListedItems = async () => {
    // console.log("itemCount")
    // Load all sold items that the user listed
    const itemCount = await marketplace.itemCount()
    let listedItems = []
    let soldItems = []
    console.log("itemCount", itemCount)
    for (let indx = 1; indx <= itemCount; indx++) {
      const i = await marketplace.items(indx)
      if (i.seller.toLowerCase() === account) {
        // get uri url from nft contract
        let uri = await nft.tokenURI(i.tokenId)
        // use uri to fetch the nft metadata stored on ipfs
        console.log("uri", uri);
        uri = uri.replace("ipfs.infura.io", "infura-ipfs.io");
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(i.itemId)
        // define listed item object
        metadata.image = metadata.image.replace("ipfs.infura.io", "infura-ipfs.io");
        let item = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        }
        { console.log("listedItems", listedItems) }
        listedItems.push(item)
        // Add listed item to sold items array if sold
        if (i.sold) soldItems.push(item)
      }
    }
    setLoading(false)
    setListedItems(listedItems)
    setSoldItems(soldItems)
  }
  useEffect(() => {
    loadListedItems()
  }, [])

  if (loading) return (
    <main style={{ padding: "1rem 0", marginBottom: '60%' }}>
      <h2>Loading...</h2>
    </main>
  )

  return (
    <div className="flex justify-center " >
      {listedItems.length > 0 ?
        <div >
          <h2>Listed</h2>
          <div className='custom' style={{ marginLeft: '80px', marginRight: '80px' }}>
            <Swiper
              slidesPerView={3}

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
              {listedItems.map((item, idx) => (
                <div  >
                  <SwiperSlide><NftCard description={"19"} item={item} /></SwiperSlide>
                </div>
              ))}

            </Swiper>


          </div>
          {/* {soldItems.length > 0 && renderSoldItems(soldItems)} */}
          {renderSoldItems(soldItems)}
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
        )
      }




    </div >
  );
}