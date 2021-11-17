import s from './Transaction.module.css';
export default function Transaction({ items }) {
  return (
    <>
      {items.map(item => (
        <tr key={item.id} id={item.id} className={s.tr}>
          <td className={s.td}>{item.amount}</td>
          <td className={s.td}>{item.type}</td>
          <td className={s.td}>{item.currency}</td>
        </tr>
      ))}
    </>
  );
}
