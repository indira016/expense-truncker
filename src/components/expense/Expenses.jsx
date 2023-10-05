
import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../ui/card/Card"
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilder"
import ExpepenseChart from "./ExpensesChart"

function Expenses({ expenses }) {  //Expenses  ф-яны тузуп ex-s props катары бердик



    const [filteredYear, setFilteredYear] = useState("2023")// useSate чакырып ал эки параметр алып, биринчи данный сох боло турчу , экинчи ф-я который изменить, useStateке значаниеге 2023 бердик

    const getSelectedYear = (selectedYear) => {// жаны функция ачтык ал props катары selecterYear алды
        setFilteredYear(selectedYear)// useStateке берген ф-яны чакырып selecterYearти салып бердик
    }

    const filteredExpenses = expenses.filter((expens) => {
        return expens.date.getFullYear().toString() === filteredYear
    })

   let expenseContent = <p style={{color:"red",textAlign:"center" }}>No Expenses Found</p>

    if(filteredExpenses.length > 0) {
       expenseContent = filteredExpenses.map((el) => {
            return <ExpenseItem 
            key={Math.random}
            title={el.title} 
            price={el.price} 
            date={el.date}/>
        })}
    

    if(filteredYear === "All") {
        expenseContent = expenses.map((el) => {
             return <ExpenseItem 
             key={Math.random}
             title={el.title} 
             price={el.price} 
             date={el.date}/>
         })}
     

    return (
        <Card className='expenses'>
            <ExpenseFilter filteredYear={filteredYear} onSelect={getSelectedYear}/>
            <ExpepenseChart expenses={expenses} />
            {expenseContent}
            {/* {filteredExpenses.length === 0 ? <p style={{color:"red",textAlign:"center" }}>No Expenses Found</p> : filteredExpenses.map((el) => {
                return <ExpenseItem 
                key={Math.random}
                title={el.title} 
                amount={el.amount} 
                date={el.date}/>
            })} */}

            {/* {filteredExpenses.map((el) => {
                return <ExpenseItem 
                key={Math.random}
                title={el.title} 
                amount={el.amount} 
                date={el.date}/>
            })} */}
        </Card>
    );
};    



export default Expenses;

