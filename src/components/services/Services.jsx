import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/images/design.png'
import ecommerceicon from '../../assets/images/ecommerce.png'
import webicon from '../../assets/images/web.png'


export default class Services extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='ServiceMainTitle' >My Services</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img  className='designIcon' src={designIcon} />
                            <h2 className='serviceName'>Web Design</h2>
                            <p className='servicedescription'>qualified web design and attractive designs</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className='ecommerceicon' src={ecommerceicon} />
                        <h2 className='serviceName'>Ecommerce </h2>
                        <p className='servicedescription'>i will design and develop ecommerce online store applicationsooooooooooo</p>
                    </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className='webicon' src={webicon} />
                        <h2 className='serviceName'>Web Development</h2>
                        <p className='servicedescription'>Clean and fresh website development with dynamic code</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}
