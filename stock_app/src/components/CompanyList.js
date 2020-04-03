import React from 'react'
import SingleCompany from './SingleCompany';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';



class CompanyList extends React.Component {
    constructor(props){
        super(props);
    }
    

    render(){
        const {filteredCompanies}=this.props;

        return (    
                <Card bg={'light'}>
                    <Card.Header style={{ color: 'gray', textAlign: 'center' }}><h3><b>Companies</b></h3></Card.Header>
                    <Card.Body>
                        <FormControl type="text" onChange={(e)=>{this.props.handleFilterChange(e)}} />
                        <hr></hr>
                        <Card.Text>
                            <ListGroup>
                                {filteredCompanies.map(company=><ListGroup.Item><SingleCompany onCompanyCheckboxChange={this.props.onCompanyCheckboxChange} company={company} />              
                                </ListGroup.Item> )}
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
             
        );
        
    }
}

export default CompanyList;