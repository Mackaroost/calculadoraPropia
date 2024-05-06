import { useState } from 'react'
import { type Productos, type ObjCompra, type HookUserOrder } from '../type'

const useOrder = (): HookUserOrder => {
  const [orden, setOrden] = useState<ObjCompra[]>([])
  const [propina, setPropina] = useState(0)

  const addItem = (item: Productos): void => {
    const duplicado = orden.find(ordeItem => item.id === ordeItem.id)
    if (duplicado != null) {
      const updatedOrden = orden.map(ordeItem =>
        ordeItem.id === item.id ? { ...ordeItem, cantidad: ordeItem.cantidad + 1 } : ordeItem
      )
      setOrden(updatedOrden)
    } else {
      const newItem = {
        ...item,
        cantidad: 1
      }
      setOrden(orden => [...orden, newItem])
    }
  }

  const restItem = (item: Productos): void => {
    const duplicado = orden.find(ordeItem => item.id === ordeItem.id)
    if (duplicado !== null) {
      const updatedOrden = orden.map(ordeItem =>
        ordeItem.id === item.id ? { ...ordeItem, cantidad: ordeItem.cantidad - 1 } : ordeItem
      )
      setOrden(updatedOrden.filter((ordeItem) => ordeItem.cantidad > 0))
    } else {
      const newItem = {
        ...item,
        cantidad: 1
      }
      setOrden(orden => [...orden, newItem])
    }
  }

  const deleteItem = (id: number): void => {
    const updateItem = orden.filter((ordenItem) => ordenItem.id !== id)
    setOrden(updateItem)
  }
  const resetOrden = (): void => {
    setOrden([])
    setPropina(0)
  }
  return { addItem, restItem, orden, deleteItem, setPropina, propina, resetOrden }
}

export default useOrder
