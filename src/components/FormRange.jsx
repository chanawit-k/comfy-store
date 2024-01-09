import React, { useState } from 'react'
import { formatPrice } from '../utils'
const FormRange = ({ label, name, size }) => {
  const step = 1000
  const maxPrice = 100000
  const [selected, setSelected] = useState(maxPrice)
  return (
    <div>
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="range"
        min={0}
        max={maxPrice}
        className={`range range-primary ${size}`}
        name={name}
        id={name}
        onChange={(e) => setSelected(e.target.value)}
        step={step}
        value={selected}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}

export default FormRange
