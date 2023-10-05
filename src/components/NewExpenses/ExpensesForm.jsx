import React,{useState} from "react";
import './ExpensesForm.css'

const ExpensesForm =(props)=>{

const [title,setTitle]=useState('')
const [price,setPrice]=useState('')
const [date,setDate]=useState('')

const titleChangeHandler=(event)=>{
    setTitle(event.target.value);
    
}
const priceChangeHandler=(event)=>{
    setPrice(event.target.value)
}
const dateChangeHandler=(event)=>{
    setDate(event.target.value)
}
const addExpense=(event)=>{
event.preventDefault()
const currentExpense={
    title:title,
    price:Number(price),
    date:new Date(date)
}
props.onSave(currentExpense)
console.log(title);
console.log(price)
console.log(date)
}

    return(
        <form onSubmit={addExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input value={title} onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Price</label>
                    <input value={price} onChange={priceChangeHandler} type="number" min={1} step={'1'} name="" id="" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input value={date} onChange={dateChangeHandler} type="date" min={'2022.01.01'} max={'2026.01.01'} />
                </div>
            </div>
            <button className="new-expense__action" type="submit">Add expense</button>
        </form>
    )
}
export default ExpensesForm