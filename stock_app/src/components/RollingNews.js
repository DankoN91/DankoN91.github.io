import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SingleNews from './SingleNews';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class RollingNews extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {news}=this.props;
        const lastNews = news.slice(0,10);
        return (    
                <Card bg="light">                 
                    <Carousel>  
                        {lastNews.map(single=>
                            <Carousel.Item>
                                <a target = "_blank" href={single.url}><ListGroup.Item>                                                                     
                                    <SingleNews single={single} key={single.id} />                         
                                </ListGroup.Item>
                                </a>
                            </Carousel.Item>
                            )}        
                    </Carousel>           
                </Card>        
        );        
    }
}


export default RollingNews;