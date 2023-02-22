import React from "react";
import ExpenseForm from "./expense_form/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSave=(value)=>{
        const expense_data={
            ...value,
            id: Math.random().toString()
        }
        //console.log('djfhkjdhfkjfhkjdfh',expense_data,value);
        props.onAddExpense(expense_data);
    }
    return (<div className="new-expense">
       <ExpenseForm
       onSave={onSave}/>
    </div>
    )
}
export default NewExpense;