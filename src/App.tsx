import ListaProducto from './components/ListaProducto'
import Compras from './components/Compras'
import { useState } from 'react'
import { DataProductos } from './data'
import useOrder from './hooks/useOrder'
import Totales from './components/Totales'
import FormPropina from './components/FormPropina'

function App (): JSX.Element {
  const [productos] = useState(DataProductos)
  const { addItem, restItem, orden, deleteItem, setPropina, propina, resetOrden } = useOrder()

  return (
    <main className='flex flex-col justify-center items-center'>
    <div className='py-12 flex items-center justify-center text-center mx-auto'>
      <h1 className = 'text-center text-2xl text-black font-bold'>Calculadora de Propinas</h1>
      </div>
          <ListaProducto data={productos} addItem={addItem} />
        <>
          {orden.length > 0
            ? (
            <div className='bg-slate-300 md:w-[450px] md:mx-auto my-8 p-4 rounded-md shadow-md m-4 '>
              <Compras orden={orden} deleteItem={deleteItem} addItem={addItem} restItem={restItem} />
              <FormPropina setPropina={setPropina} propina={propina} />
              <Totales orden={orden} propina={propina} resetOrden={resetOrden} />
            </div>
              )
            : (
            <p className='text-center pt-10 text-xl font-semibold'>La orden está vacía</p>
              )}
        </>

    </main>
  )
}

export default App
