import React from 'react'
import { type ObjCompra, type Productos } from '../type'

interface ComprasProps {
  orden: ObjCompra[]
  deleteItem: (id: number) => void
  addItem: (item: Productos) => void
  restItem: (item: Productos) => void
}

const Compras: React.FC<ComprasProps> = ({ orden, deleteItem, addItem, restItem }) => {
  return (
    <>
      <h2 className='text-center text-xl font-semibold text-black py-4 '>Lista de Seleccionados</h2>
      {
            orden.map((item) => (
          <div key={item.id} className= 'flex items-center justify-between p-4 '>
              <p className=' text-black font-semibold'>{item.nombre}</p>
              <div className='flex items-center justify-center text-center'>
              <button
              className=' text-lg font-bold'
              onClick={() => { restItem(item) }}>-</button>
              <p className='px-3'>{item.cantidad}</p>
              <button
               className='text-lg font-bold '
              onClick={() => { addItem(item) }}>+</button>
              </div>
              <p className='font-semibold  text-black px-2'>${item.precio * item.cantidad}</p>
            <button className=' w-8   bg-slate-400 font-semibold text-white text-center  rounded' onClick={() => { deleteItem(item.id) }}>X</button>
          </div>
            ))
        }
    </>
  )
}

export default Compras
