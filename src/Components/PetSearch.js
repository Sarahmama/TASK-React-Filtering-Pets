import React from 'react'

const PetSearch = ({petSearch}) => {
  return (
    <div className="input-group rounded">
    <input
      type="search"
      className="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    onChange={petSearch}
    />
  </div>
  )
}

export default PetSearch