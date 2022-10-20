import React from 'react'
import './IntroBox.css'
import newNFT from '../../images/BUTO-NFT-Marketplace-assets_New_icon.svg'

function IntroBox(props) {
    return (
        <div className='introBoxes' style={{ backgroundColor: props.background }}>

            <img src={props?.icon} alt="Logo" className='icon' />
            <h1> {props.heading}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                shdajkda dahsdkahsd
                .</p>
            <button className='btn'>{props.btnText}</button>
        </div>
    )
}

export default IntroBox