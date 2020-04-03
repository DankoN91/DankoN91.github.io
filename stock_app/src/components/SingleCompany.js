import React from 'react';
import { getCompanyData } from '../service/finnhubApi';

let handleCompanyDataClick=(symbol)=>{
    getCompanyData(symbol).then((response)=>{alert(response.description)})
}


const SingleCompany=(props)=>{
    const {company}=props;
    let onCompanyCheckboxChange=props.onCompanyCheckboxChange;
    return (
        <div type="container">
            <div className="row">
                <div className="col-md-10" onClick={()=>{handleCompanyDataClick(company.symbol)}}>
                    <p>{company.name}</p>
                </div>
                <div className="col">
                    <input type="checkbox" onChange={(event)=>{
                         const target = event.target;
                         const value = target.checked;
                         onCompanyCheckboxChange(company.symbol,value);
                         }}></input>
                </div>       
            </div>
        </div>);
}

export default SingleCompany;