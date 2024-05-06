import React, { useMemo } from 'react'
import { type ObjCompra } from '../type'

interface TotalesProps {
  orden: ObjCompra[]
  propina: number
  resetOrden: () => void
}

const Totales: React.FC<TotalesProps> = ({ orden, propina, resetOrden }) => {
  const subTotal = useMemo(() => {
    return orden.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
  }, [orden])

  const totalPropina = useMemo(() => subTotal * propina, [orden, propina])
  const total = useMemo(() => subTotal + totalPropina, [propina, orden])

  return (
    <>

      <h2 className='text-center text-lg py-4 font-semibold'>Resumen</h2>
      <div className= 'flex items-center  gap-x-3 justify-evenly'>
      <p className='font-semibold'>SubTotal: ${subTotal.toFixed(2)} </p>
      <p className='font-semibold'>Propina: ${totalPropina.toFixed(2)}</p>
      <p className='font-semibold'>Total: ${total.toFixed(2)}</p>
    </div>
    <div>
        <div className='pt-8 text-center'>
    < button className='bg-slate-500 p-2 rounded font-semibold text-white' disabled = {(total <= 0)} onClick={resetOrden } >
        Guardar Pedido
    </button>
    </div>
    </div>
    </>

  )
}

export default Totales
