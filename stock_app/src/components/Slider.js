import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import slajd1 from '../resources/slajd1.png';
import slajd2 from '../resources/slajd2.png';
import slajd3 from '../resources/slajd3.png';
import slajd4 from '../resources/slajd4.png';


export default class Slider extends React.Component {
    constructor(){
        super();
        // style={{ width: '70%' }}
    }
    render(){
        return (
            <div className="col-8">
            <Card className="md-col-12" bg="light">
                <Card.Header style={{ color: 'gray', textAlign: 'center' }}><h3><b>Preview</b></h3></Card.Header>
                    <Card.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slajd1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slajd2}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slajd3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slajd4}
                                alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Card.Body>
            </Card>
        </div>);
    }
}

