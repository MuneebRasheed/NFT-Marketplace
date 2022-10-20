import React from 'react'
import { Card } from 'react-bootstrap'
import { ethers } from "ethers"

import nftimage from '../../images/monkey.png'

function NftCard({ description, item }) {
    return (
        <div style={{ marginBottom: '10px' }}> <Card style={{
            borderRadius: '15px', alignItems: 'center', justifyContent: 'center',
        }}>

            <Card.Img variant="top" src={nftimage} style={{ width: '100%' }} />
            <Card.Body color="secondary">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>


                <div style={{ backgroundColor: '#098A45', borderRadius: '10px', width: '150px', marginTop: '10px', marginBottom: '10px' }}>BUY for {ethers.utils.formatEther(item.price)}ETH</div>
            </Card.Footer>
        </Card></div >
    )
}

export default NftCard