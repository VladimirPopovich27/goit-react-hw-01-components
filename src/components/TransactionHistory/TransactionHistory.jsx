import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory=({items})=>{
    console.log(items);
    return <table className={css.transactionhistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
    {items.map(({id, type, amount, currency}) => <tr key ={id}>
        <td className = {css.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>)}
      
    </tbody>
  </table>
}

TransactionHistory.propTypes ={
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}