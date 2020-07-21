import React from "react";

const Covidlist = (props)=>{
    console.log(props)
    return(
        <>
        <tr>
            <td className="info">{props.value.state}</td>
            <td className="success">{props.value.active}</td>
            <td className="warning">{props.value.confirmed}</td>
            <td className="danger">{props.value.deaths}</td>
            <td className="warning">{props.value.deltaconfirmed}</td>
            <td className="info">{props.value.lastupdatedtime}</td>
        </tr>

        </>
    )
}

export default Covidlist;