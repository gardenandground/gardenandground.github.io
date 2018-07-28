import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './gallery.css';
import '../../common.css';
import commonTextData from '../../common.json';
import portfolioListData from './portfolio-list.json';
import { Grid, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import grandMania from '../gallery/data/grand-mania';
import blackmountain from '../gallery/data/blackmountain';
import grass from '../gallery/data/grass';
import pranburiResort from '../gallery/data/pranburi-resort';
import zen from '../gallery/data/zen';
import homeGarden from '../gallery/data/home-garden';
import thummaratHouse from '../gallery/data/thummarat-house';
import water from '../gallery/data/water';

var array = [
    {
        "grandMania": grandMania,
        "blackmountain": blackmountain,
        "grass": grass,
        "resortPranburi": pranburiResort,
        "zen": zen,
        "homeGarden": homeGarden,
        "thummaratHouse": thummaratHouse,
        "water": water
    }
];

export default class Home extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            defaultPortfolio: 'grandMania',
            images: array[0]['grandMania'],
            
        };
        
    }

    changeDefaultPortfolio (data) {
        
        this.setState({
            isMenuOpen: false,
            defaultPortfolio: data,
            images: array[0][data],
        });
        
        
    }

    render() {

        var IMAGES = this.state.images;
        var commonText = commonTextData;
        var portfolioList = portfolioListData;
        var rows = [];
          
        for (let index = 0; index < Object.values(portfolioList).length; index++) {

            rows.push(
                <li onClick={() => this.changeDefaultPortfolio(Object.keys(portfolioList)[index])} > {Object.values(portfolioList)[index].name} </li>
            );
            
        }

        return (
 
                      
            <div className='Common-Font'>
            <Menu isOpen={ this.state.isMenuOpen } pageWrapId={ "page-wrap" }>
                <h2> {commonText.portfolio} </h2>
                <ul>
                    {rows}
                </ul>
                <p><a className="link-gray" href="/"> {commonText.home} </a></p> 
            </Menu>
            <main id="page-wrap">
                <div className='Gallery-banner'>
                    <div className='Gallery-branding'>
                        <span className='Home-branding-large-txt'>{commonText.brandingUpper}</span>
                        <br />
                        <span className='Home-branding-small-txt'>{commonText.brandingLower}</span>
                    </div>
                </div>
                

                <Grid>
                    <Row className="show-grid">
                              
                        <Col className="Gallery-sidebar hidden-xs" md={3}> 
                            <h2> {commonText.portfolio} </h2>
                            <ul>
                                {rows}
                            </ul>
                            <p><a className="link-black" href="/"> {commonText.home} </a></p> 
                            
                        </Col>
                        <Col xs={12} md={9}>
                            <h2>{ portfolioList[this.state.defaultPortfolio].name }</h2>
                            <Gallery images={IMAGES} enableImageSelection={false}/>
                        </Col>
                    </Row>
                </Grid>

                <footer className="footer txt-center">
                    <span> {commonText.footer.copyright} </span>
                </footer>
            </main>
            </div>

        );
    }
}