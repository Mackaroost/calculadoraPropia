import React from 'react'
import { type Productos } from '../type'

interface ListaProductoProps {
  data: Productos[]
  addItem: (item: Productos) => void
}

const ListaProducto: React.FC<ListaProductoProps> = ({ data, addItem }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedProductId: string = e.target.value
    if (selectedProductId.length > 0) {
      const selectedProduct = data.find(producto => producto.id.toString() === selectedProductId)
      if (selectedProduct != null) {
        addItem(selectedProduct)
      }
    }
  }

  return (

    <div className='md:mx-auto m-4 items-center justify-center  p-4 space-y-8 rounded-lg flex-col md:w-[450px] bg-gray-500'>
      <h2 className='text-center text-xl font-semibold text-slate-50'> Productos a domicilio</h2>
      <div className='text-center'>
        <select className='focus:outline-none border-none p-2 rounded font-semibold' id="select-producto" name="select-producto" onChange={handleSelectChange}>
          <option value="">Agregar Productos</option>
          {data.map((producto) => (
            <option key={producto.id} value={producto.id.toString()}>
              {producto.nombre} -- ${producto.precio}
            </option>
          ))}
        </select>
      </div>
    </div>

  )
}

export default ListaProducto
