import React from 'react'

const PetSelector = ({petSelector}) => {
  return (
    <select className="form-select" onChange={petSelector}>
    <option value="" selected>
      All
    </option>
    <option value="Cat">Cat</option>
    <option value="Dog">Dog</option>
    <option value="Rabbit">Rabbit</option>
  </select>
  )
}

export default PetSelector