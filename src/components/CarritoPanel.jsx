function CarritoPanel({ carrito, total, onQuitar, onVaciar }) {
  return (
    <aside className="carrito">
      <h2>Carrito ({carrito.length})</h2>

      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <span className="nombre">{item.title}</span>
            <button onClick={() => onQuitar(item.id)}>Quitar</button>
          </li>
        ))}
      </ul>

      <p className="total">Total: $ {total.toFixed(2)}</p>
      <button className="vaciar" onClick={onVaciar}>
        Vaciar carrito
      </button>
    </aside>
  )
}

export default CarritoPanel
