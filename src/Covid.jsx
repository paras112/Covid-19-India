import React, { useEffect, useState } from "react";
import axios from "axios";
import Covidlist from "./Covidlist";
const Covid = () =>{
    const [totalcase,setTotal]=useState([])
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://api.covid19india.org/data.json`);
            setTotal(res.data.statewise)
            // console.log(res.data)
        }
        getData();
    },[])
    // console.log(totalcase);
    return(
        <>
        <div className="container">
        <h2 className="alert alert-success">Covid-19 Cases in India.Hope you are all safe</h2>
        <table className="table">
            <thead>
                <tr>
                    <th className="info">State</th>
                    <th className="success" >Active</th>
                    <th className="warning">Confirmed</th>
                    <th className="danger">Deaths</th>
                    <th className="warning">Death Confirmed</th>
                    <th className="info">Updted Time</th>
                </tr>
            </thead>
            <tbody>
            {totalcase.map((data,index)=>{
                return (
                    <Covidlist key={index} value={data}/>
                )
            })}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Covid;
{/* <table>
{res.data.statewise.map((value)=>{
    return(
        <>
        </>
    )
})}
</table> */}