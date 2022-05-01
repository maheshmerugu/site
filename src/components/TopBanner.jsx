import React, { Component, Fragment } from 'react'
import '../../src/assets/css/custom.css';
import '../../src/assets/css/bootstrap.min.css';

import { Col,Container,Row,Button } from 'react-bootstrap'

export class TopBanner extends Component {
  render() {
    return (

        <Fragment>

            <Container fuild={true} className='topFixedBanner p-0'>
              <div className='topBannerOverLay'>
                <Container className='topContent'>
                  <Row>
                    <Col className='text-center'>
                    <h1 className='topTitle'>Easy Learning</h1>
                    <h4 className='topSubTitle'>Learn Profesionally</h4>
                    <Button variant="primary">Learn More</Button>
                    </Col>
                   
                  </Row>

                </Container>

              </div>

            </Container>

        </Fragment>

    )
  }
}

export default TopBanner