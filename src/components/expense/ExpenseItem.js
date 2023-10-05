import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => { // ф-я тузуп пропсы бердик
    const expensePrice = props.price// expensePrice тузуп биздин App.js деги данныйды пропсы аркылуу priceты берип койдук
    const expenseTitle = props.title// expenseTitle тузуп биздин App.js деги данныйды пропсы аркылуу titleды берип койдук
    return ( // кайтарып атат
        <div className='expense-item'> 
        {/* // divти ачып className берип койдук */}
            <ExpenseDate date={props.date} />
             {/* // ExpenseDate компонентти берип date деген пропс ачып date салып койдук */}
            <h2 className='expense-item__description'>{expenseTitle} </h2> 
             {/* ойдодо ачкан expenseTitleди h2  салып койдук */}
            <div className='expense-item__price'>${expensePrice}</div>
             {/* ойдодо ачкан expensePrice интер поляция жолу мн divке салып бердим */}
        </div>
    )
}
export default ExpenseItem