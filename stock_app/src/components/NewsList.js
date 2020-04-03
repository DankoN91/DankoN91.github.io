import React from 'react'
import SingleNews from './SingleNews';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class NewsList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {news}=this.props;
        const lastNews = news.slice(0,10);
        return (  
                <Card bg="light">
                    <Card.Header style={{ color: 'gray', textAlign: 'center' }}><h3><b>Live News</b></h3></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup>
                                {lastNews.map(single=><a target="_blank" href={single.url} ><ListGroup.Item><SingleNews single={single} key={single.id} /></ListGroup.Item> </a>)}
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
        );
        
    }
}

export default NewsList;