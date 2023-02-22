import React, { useState } from "react";
import './Expenseitem.css';
import ExpenseDate from "../expense_date/ExpenseDate";

// props is an object
    //In react function is component when the starting letter is caps
    //ExpenseItem's container is div
  // Hooks is in react {usestate} == used to updated when click button is clicked (it refresh in DOM and update the name OF THE SINGLE CMPONENT )- state update
const ExpenseItem=  (props = {})=>{
//   let
//     {
//         date= new Date(),
//         //title ='',
//         amount=0
//     } = props;
    //console.log(props);
   const [title,setTitle]=useState(props.title)
   const [date,setDate]=useState(props.date)
   const [amount,setAmount]=useState(props.amount)
        
    // const year = date.getFullYear();
    // const month = date.toLocalDateString('en-US',{month: 'long'});
    // const day = date.toLocalDateString('en-US',{day: '2-digit'});

    // console.log(year); ---> This entire code is separeted and pasted in EXPENSEDATE.JSX
    function onChangeClick(event){
        console.log('ExpenseItemExpenseItemExpenseItem');
        setTitle('updated');
        setAmount(0);
        setDate(new Date());
        console.log(title);
    }

      return(
        <div className="expense-item">          
            <ExpenseDate date ={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                ${amount}</div>
            </div>
            <button onClick ={onChangeClick}>Change</button>
        </div>
    ) //returning from html
}
export default ExpenseItem;

//export ah namma app.js la pannanum
//in react caps na tha function it means component
//return html
//div for container creation getting date 