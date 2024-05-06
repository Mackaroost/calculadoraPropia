export interface Productos {
  id: number
  nombre: string
  precio: number
}

export interface ObjCompra extends Productos {
  cantidad: number
}

export interface HookUserOrder {
  addItem: (item: Productos) => void
  restItem: (item: Productos) => void
  orden: ObjCompra[]
  deleteItem: (id: number) => void
  setPropina: React.Dispatch<React.SetStateAction<number>>
  propina: number
  resetOrden: () => void
}
