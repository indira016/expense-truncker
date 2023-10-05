import React from "react";
import ExpensesForm from "./ExpensesForm";
import './NewExpenses.css'

const NewExpenses=(props)=>{
    const saveExpenseDate=(expense)=>{
        const dataWithId={
id:Math.random().toString(),
...expense
        }
    props.onGet(dataWithId)
    }
    return (
        <div className="new-expense">
<ExpensesForm onSave={saveExpenseDate}/>
        </div>
    )
}

export default NewExpenses