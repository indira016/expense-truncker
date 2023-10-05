import React, {useState} from 'react';
import Expenses from './components/expense/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses'
import './App.css';

// INIT_DATA ачып озубуз данныйларды бердик
const INIT_DATA =[ // 
  {
    id:'1',
    title:'Car Insurense',
    price:200,
    date:new Date(2023,7,18)
  },
  {
    id:'2',
    title:'Kids Garden',
    price:500,
    date:new Date(2023,7,1)
  },
  {
    id:'3',
    title:'Tyalet Peper',
    price:2,
    date:new Date(2022,7,18)
  },
  {
    id:'4',
    title:'Onlain-Cours',
    price:300,
    date:new Date(2020,7,20)
  },
]

function App() {
  const[expenses,setExpenses]=useState(INIT_DATA)
  // рендер кылыш учун  useState чакырып ичине INIT_DATA  салып бердик , биринчи элемент бул- текущий значениясы , экинчи элемент функция обновления кыла турчу 

  const getExpenseHandler=(newExpense)=>{  
  // жаны ф-я ачып ага пропсы катары newExpense бердик

  setExpenses((prevState)=>{
  return [newExpense,...prevState]
})
}
  return (
    <div className="App">
<NewExpenses onGet={getExpenseHandler}  />
<Expenses expenses={expenses} />
     </div> 
  );
}

export default App;
