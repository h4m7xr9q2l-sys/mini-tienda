function ProductoCard({ producto, enCarrito, onAgregar }) {
  return (
    <div className={enCarrito ? 'card seleccionado' : 'card'}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p className="estado">
        {producto.category} - $ {producto.price.toFixed(2)}
      </p>
      <button disabled={enCarrito} onClick={() => onAgregar(producto)}>
        {enCarrito ? '★ En el carrito' : '☆ Agregar al carrito'}
      </button>
    </div>
  )
}

export default ProductoCard
