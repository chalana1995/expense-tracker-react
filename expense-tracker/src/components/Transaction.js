import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li class={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}Rs.{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
        </li>
    )
}
