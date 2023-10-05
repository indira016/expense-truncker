 import React from "react"
 import Chart from "../Chart/Chart"

 const ExpensesChart=(props)=>{ // ф-я ачтык 
  const chartDataPoints = [ // жаны переменный ачып ичине значенияларын салып койдук
            { label: 'Jul', value: 0 },
            { label: 'Feb', value: 0 },
            { label: 'Much', value: 0 },
            { label: 'May', value: 0 },
            { label: 'Jun', value: 0 },
            { label: 'Jul', value: 0 },
            { label: 'Aus', value: 0 },
            { label: 'Sep', value: 0 },
            { label: 'Oct', value: 0 },
            { label: 'Nob', value: 0 },
            { label: 'Dec', value: 0 },
        ]
    for(const expense of props.expenses){
            const currentMouth = expense.date.getMonth()
        chartDataPoints[ currentMouth ].value+=expense.price
    }
  return <Chart dataPoint={chartDataPoints}/>
 }

 export default ExpensesChart