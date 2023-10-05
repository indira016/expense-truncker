import React from "react";
import "./ChartBar.css"

const ChartBar =(props)=>{ // ф-я ачып параматр катары пропсы бердик
let barFillHeigt='0%' // переменный ачып первоначальный значениясын  0% кылып бердик
if(props.maxValue>0){ // если мах значениясы 0чон болсо
    barFillHeigt=Math.random((props.value / props.maxValue)* 100)+'%'//
}


     return <div className="chart-bar ">
        <div className="chart-bar__inner"></div>
            <div className="chart-bar__fill" style={{height:barFillHeigt}}>
        </div>
        <label className="chart-bar__label">{props.label}</label>
     </div>
}
export default ChartBar