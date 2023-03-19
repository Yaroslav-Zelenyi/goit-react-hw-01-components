import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <div className={css.transaction__main}>
      <table className={css.transaction__history}>
        <thead>
          <tr>
            <th className={css.category}>Type</th>
            <th className={css.category}>Amount</th>
            <th className={css.category}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.data}>{type}</td>
              <td className={css.data}>{amount}</td>
              <td className={css.data}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
