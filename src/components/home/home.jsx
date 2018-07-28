import React, { Component } from 'react';
import './home.css';
import '../../common.css';
import textData from './home-text.json';
import commonTextData from '../../common.json';
import imageData from './imageData.jsx';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

export default class Home extends Component {
    render() {

        const IMAGES = imageData;
        var text = textData;
        var commonText = commonTextData;

        return (
            <div className= 'Common-Font'>
                <div className = 'Home-banner'>
                    <div className = 'Home-branding'>
                        <span className = 'Home-branding-large-txt'>{ commonText.brandingUpper }</span>
                        <br/>
                        <span className = 'Home-branding-small-txt'>{ commonText.brandingLower }</span>
                    </div>
                    <div className = 'Home-title'>
                        <p className = 'Home-title-text'> { text.title } </p>
                    </div>
                </div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6}>
                            <h2>
                            <Image src= { process.env.PUBLIC_URL + '/images/assets/organic.jpg' } responsive />
                            </h2>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2> { text.organic.titleTH } </h2>
                            
                            <p> { text.organic.detail } </p>

                            <h2> { text.treeRent.title } </h2>
                            <p> { text.treeRent.detail } </p>

                            <h2> { text.contact.title } </h2>
                            <table>
                                <tr>
                                    <td>
                                        <p> { text.contact.tel } </p>
                                    </td>
                                    <td>
                                        <p> { text.contact.telDetail } </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p> { text.contact.email } </p>
                                    </td>
                                    <td>
                                        <a className="link-black" href="mailto:apichatbuddeewong@gmail.com"><p> { text.contact.emailDetail } </p></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p> { text.contact.address } </p>
                                    </td>
                                    <td>
                                        <p> { text.contact.addressDetail } </p>
                                    </td>
                                </tr>
                            </table>

                        </Col>
                    </Row>

                    <Row className="show-grid txt-center">
                        <Col xs={12} md={12}>
                            <h2> <a className="link-black" href="/gallery"> { text.gallery } </a></h2>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <Gallery images={IMAGES} enableImageSelection={false}/>
                        </Col>
                    </Row>

                    <Row className="show-grid txt-center">
                        <Col xs={12} md={12}>
                            <p><a href="/gallery"> { text.seeAll } </a></p>
                        </Col>
                    </Row>
                </Grid>
                <footer className="footer txt-center">
                    <span> { commonText.footer.copyright } </span>
                </footer>
            </div>
            
        );
    }
}