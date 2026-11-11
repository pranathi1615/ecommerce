import { formatINR } from "../utils";

// One table row. All data and actions come in through props.
function CartItem({ item, onQtyChange, onRemove }) {
  const handleQty = (e) => {
    // Never allow less than 1 or an empty/invalid value
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    onQtyChange(item.id, value);
  };

  return (
    <tr>
      <td>
        <button
          className="remove-btn"
          aria-label={`Remove ${item.name}`}
          onClick={() => onRemove(item.id)}
        >
          <i className="far fa-times-circle"></i>
        </button>
      </td>
      <td>
        <img src={item.image} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>{formatINR(item.price)}</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.qty}
          onChange={handleQty}
          aria-label={`Quantity for ${item.name}`}
        />
      </td>
      <td>{formatINR(item.price * item.qty)}</td>
    </tr>
  );
}

export default CartItem;
