import React from 'react'

import newNFT from '../../images/BUTO-NFT-Marketplace-assets_New_icon.svg'
import Featured from '../../images/BUTO-NFT-Marketplace-assets_Featured.svg'
import Shop from '../../images/BUTO-NFT-Marketplace-assets_Shop.svg'
import './Intro.css'
import IntroBox from '../IntroBoxes/IntroBox'

export default function Intro() {
    return (
        <div className='introMainDiv'>
            <div className='introImage'>
                {/* <img src={img} alt="Logo" className='introImage' /> */}
            </div>


            <div className='introText'>

                <h1><span style={{ color: "#098A45" }}>BUTO</span> MarketPlace</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    .</p>
                <button className='Introbtn'>Learn More</button>


            </div>
            <div className='introContainer'>
                <IntroBox icon={newNFT} heading={"NEW NFTS"} btnText={"Learn More"} background="#098A45" />
                <IntroBox icon={Featured} heading={"FEATURED NFTS"} btnText={"See More"} background="#056936" />
                <IntroBox icon={Shop} heading={"SHOP"} btnText={"Shop now"} background="#064F28" />

            </div>




        </div>
    )
}
