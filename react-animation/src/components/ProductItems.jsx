import React from 'react'

const ButtonComponent = () => {
    return (
      <div>
      <button>Click Here</button>
      </div>
    )
  }


const ProductItems = ({item,key}) => {
  return (
    <div key={key}>
      <h3>{item}</h3>
      <ButtonComponent/>
    </div>
  )
}

export default ProductItems
