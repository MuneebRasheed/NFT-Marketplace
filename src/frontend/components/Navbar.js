import {
    Link
} from "react-router-dom";
import { Nav, Button } from 'react-bootstrap'
import logo from '../images/logo.svg'

import './Navbar.css'
const Navigation = ({ web3Handler, account }) => {
    return (

        <div className="HeaderContainer">
            <div className='HeaderLogo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='headerList'>
                <div className='NftName'>
                    NFT Market Place
                </div>
                <div className='ulHeader'>
                    <ul className="nav-links">
                        <li><Nav.Link as={Link} to="/"><span className="spanColor">Home</span></Nav.Link></li>
                        <li><Nav.Link as={Link} to="/create"><span className="spanColor">Create</span></Nav.Link></li>
                        <li> <Nav.Link as={Link} to="/my-listed-items"><span className="spanColor">My Listed Items</span></Nav.Link></li>
                        <li> <Nav.Link as={Link} to="/my-purchases"><span className="spanColor">My Purchases</span></Nav.Link></li>
                    </ul>
                </div>


            </div>

            <Nav>

                {account ? (
                    <Nav.Link
                        href={`https://etherscan.io/address/${account}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button nav-button btn-sm mx-4">
                        <Button variant="outline-light">
                            {account.slice(0, 5) + '...' + account.slice(38, 42)}
                        </Button>

                    </Nav.Link>
                ) : (
                    <Button className="wallet" onClick={web3Handler} variant="success">Connect Wallet</Button>
                )}
            </Nav>

        </div>
    )

}

export default Navigation;