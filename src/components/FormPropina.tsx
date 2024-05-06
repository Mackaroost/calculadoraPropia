import React from 'react'

// Definición de las opciones de propina
const tipOptions = [
  {
    id: 'tip-10',
    value: 0.10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: 0.20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: 0.50,
    label: '50%'
  }
]

interface PropsFormPropina {
  setPropina: React.Dispatch<React.SetStateAction<number>>
  propina: number
}

const FormPropina: React.FC<PropsFormPropina> = ({ setPropina, propina }) => {
  return (
    <div>
      <h2 className='text-center text-black text-xl font-semibold pt-4'>Propina al Repartidor</h2>
      <form className='flex items-center justify-around'>
        {
        tipOptions.map((item) => (
          <div key={item.id} className='py-3' >
            <label className='px-2' htmlFor={item.id}>{item.label}</label>
            <input

              id={item.id}
              type="radio"
              name="tip"
              value={item.value}
              onChange={ (e) => { setPropina(+e.target.value) }}
              checked= {item.value === propina}
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default FormPropina
