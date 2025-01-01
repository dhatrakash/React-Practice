import React from 'react'
import ProductItems from './ProductItems';


// key must be passes from parent component to child component
const ProductList = ({name,city,data}) => {
    // console.log(props);
    // const {name,city}=props;    
  return (
    <div>
      <h3>Ecommerce Project</h3>
      <h4>Name is {name} and she belongs to {city}</h4>
      {/* <ProductItems/> */}
<ul>
    {data.map(
        (item,index)=>
        <ProductItems key={index} item={item}/>
        // <li key={index}>{item}</li>
        )}
</ul>
    </div>
  )
}

export default ProductList;
