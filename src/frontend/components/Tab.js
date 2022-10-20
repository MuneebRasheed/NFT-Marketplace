import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
// import Sonnet from '../../components/Sonnet';

function MainTab() {
    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-2"
        >
            <Tab eventKey="home" title="New">
                {/* {"muneeb"} */}
                <div style={{
                    marginLeft: '120px', marginRight: '120px', marginTop: '40px',
                    marginBottom: '30px', borderTopStyle: 'none'
                }}>
                    <Table striped bordered hover size="sm"
                        class='table borderless'>
                        <thead>
                            < tr >
                                <th>Collection</th>
                                <th>Volume</th>
                                <th>Collection</th>
                                <th>Volume </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>
                            <tr>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                                <td>BUTIO_NFT1</td>
                                <td>18.9 ETH</td>
                            </tr>

                        </tbody>
                    </Table>

                </div >

            </Tab >
            <Tab eventKey="profile" title="Top">

            </Tab>

        </Tabs >
    );
}

export default MainTab;