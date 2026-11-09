import { useState } from 'react'
import { useProductos } from './hooks/useProductos'
import ProductoList from './components/ProductoList'
import CarritoPanel from './components/CarritoPanel'

function TiendaApp() {
  const { productos, cargando, error } = useProductos()
  const [carrito, setCarrito] = useState([])

  const agregar = (producto) => {
    setCarrito((prev) =>
      prev.some((item) => item.id === producto.id) ? prev : [...prev, producto]
    )
  }

  const quitar = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const vaciar = () => setCarrito([])

  const total = carrito.reduce((suma, item) => suma + item.price, 0)

  return (
    <div className="app">
      <h1>Mini Tienda</h1>

      {cargando && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      {!cargando && !error && (
        <div className="contenido">
          <ProductoList
            productos={productos}
            carrito={carrito}
            onAgregar={agregar}
          />
          <CarritoPanel
            carrito={carrito}
            total={total}
            onQuitar={quitar}
            onVaciar={vaciar}
          />
        </div>
      )}
    </div>
  )
}

export default TiendaApp
