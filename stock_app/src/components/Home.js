import React from 'react';
import { Link } from 'react-router-dom';
import { getLiveNews } from '../service/finnhubApi';
import { getCompanyCandlesticks } from '../service/finnhubApi';
import logo from '../resources/rsz_stockapp_logo_transparent.png';
import NVD3Chart from 'react-nvd3';
import Card from 'react-bootstrap/Card';
import CompanyList from './CompanyList';
import RollingNews from './RollingNews';
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super();
        let symbols=[{
            name:"Apple Inc (AAPL)",
            symbol:"AAPL"
         },
         {
            name:"Amazon.com Inc (AMZN)",
            symbol:"AMZN"
         },
         {
            name:"Netflix Inc (NFLX)",
            symbol:"NFLX"
        },
        {
            name:"Nike Inc (NKE)",
            symbol:"NKE"
        },
        {
            name:"Visa Inc (V)",
            symbol:"V"
        },
        {
            name:"Facebook Inc (FB)",
            symbol:"FB"
        },
        {
            name:"Zoom Video Communications Inc (ZM)",
            symbol:"ZM"
        },
        {
            name:"Coca-Cola Co (KO)",
            symbol:"KO"  
        },
        {   
            name:"Mcdonald's Corp (MCD)",
            symbol:"MCD"
        },
        {
            name:"Tesla Inc (TSLA)",
            symbol:"TSLA"
        },
        {
            name:"State Bank of India (SBIN.NS)",
            symbol:"SBIN.NS"
        },
        {
            name:"Microsoft Corp (MSFT)",
            symbol:"MSFT"
        },
        {
            name:"Alphabet Inc (GOOGL)",
            symbol:"GOOGL"
        },
        {
            name:"Philip Morris International Inc (PM)",
            symbol:"PM"
        },
        {
            name:"Boeing Co (BA)",
            symbol:"BA"
        },
        {
            name:"American Airlines Group Inc (AAL)",
            symbol:"AAL"
        },
        {
            name:"PayPal Holdings Inc (PYPL)",
            symbol:"PYPL"
        },
        {
            name:"Activision Blizzard Inc (ATVI)",
            symbol:"ATVI"
        },
        {
            name:"Uber Technologies Inc (UBER)",
            symbol:"UBER"
        },
        {
            name:"Walt Disney Co (DIS)",
            symbol:"DIS"
        }]

        this.state = {
            companies:symbols,
            news:[],
            filterText:'',
            filteredCompanies:symbols,
            username:'',
            password:'',
            isLoggedIn:false,
            candlesticksData:[],
            isChecked:false
        }
        symbols.forEach(element => {
            let newStateKey=element.symbol+'checked';
            let newStateValue=false;
            this.state[newStateKey]=newStateValue;
        });
        this.handleFilterChange=this.handleFilterChange.bind(this);
        this.onCompanyCheckboxChange=this.onCompanyCheckboxChange.bind(this);
    }

    onCompanyCheckboxChange(symbol,checked){
        let symbolCheckedKey=symbol+'checked';
        this.setState({[symbolCheckedKey]:checked});

        if(checked){
            if(this.state.candlesticksData.filter((el)=>{
                return el.key==symbol;
            }).length==0){
                getCompanyCandlesticks(symbol).then((data)=>{
                    let newChartData = this.state.candlesticksData;
                    newChartData.push(data);
                    this.setState({candlesticksData:newChartData});
                })
            }      
        }else{
            let newChartData=this.state.candlesticksData.filter((el)=>{
                return el.key!=symbol;
            })
            this.setState({candlesticksData:newChartData});
        }
    }

    componentDidMount(){
        this.setNews();
    }

    setNews=async()=>{
        let data = await getLiveNews();
        this.setState({
            news:data
        })
    }

    handleFilterChange(e){
        this.setState({'filterText':e.target.value});
        let filtCompanies = this.state.companies.filter((element)=>{
            return (element.name.toLowerCase().includes(e.target.value.toLowerCase()));
        });
        this.setState({
            filteredCompanies:filtCompanies
        })
    }


    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/home"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="col-md-5"></div>
                    <div className="col-md-3">
                        <div className="row" style={{height:'74%'}}></div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                
                            </div>
                            <div className="col-md-4">
                                <Link onClick={()=>{window.localStorage.removeItem("stockAppToken")}}> Log Out</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr></hr>
                <RollingNews news={this.state.news} />
                <hr></hr>
                <div class="row">
                    <div className="col-md-4">
                        <CompanyList onCompanyCheckboxChange={this.onCompanyCheckboxChange} handleFilterChange={this.handleFilterChange} filteredCompanies={this.state.filteredCompanies} />
                    </div>
                    <div className="col-md-8">
                        <Card bg="light">
                            <Card.Header style={{ color: 'gray', textAlign: 'center' }}><h3><b>Chart</b></h3></Card.Header>
                                <Card.Body>
                                    <NVD3Chart forceY={[0]} height='600' id="barChart" type="lineChart" showXAxis={false}  datum={this.state.candlesticksData} 
                                    tooltip={{
                                        headerFormatter:(x)=>{
                                            let date = new Date(x*1000);
                                            return date.toLocaleDateString();
                                    }}} x="x" y="y"/>
                                </Card.Body>
                        </Card>
                    </div>                 
                </div>
                <hr></hr>
            </div>                    
        )
    }
}




export default withRouter(Home);