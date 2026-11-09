const URL_API = 'https://dummyjson.com/products?limit=12'

export async function fetchProductos() {
  const respuesta = await fetch(URL_API)

  if (!respuesta.ok) {
    throw new Error('Error HTTP ' + respuesta.status)
  }

  const datos = await respuesta.json()
  return datos.products
}
