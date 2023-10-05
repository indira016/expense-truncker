import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"


const Chart=(props)=>{
    const chartDataPointsValue=props.dataPoint.map(data=>data.value)
    const totalMax=Math.max(...chartDataPointsValue)
return <div className="chart">
{props.dataPoint.map(data=>(
     <ChartBar 
            key={data.label}
               value={data.value}
               maxtotal={totalMax}
               label={data.label}
               />
))}
</div>
}

 export default Chart


