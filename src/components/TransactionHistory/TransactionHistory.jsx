import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={(css.tr, css.itemRow)}>
              <td className={css.td}>{item.type}</td>
              <td className={css.td}>{item.amount}</td>
              <td className={css.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;