import './categories.component.styles.css'
import Category from '../../types/category.types'
import { useState } from 'react'

const Categories = () =>{
 /*  const [categories, setCategories]= useState<Category[]>([]) */
  return(
    <div className="categories-container">
      <div className="categories-content">
      {/*   {categories.map(category => <Category/>)} */}
      <p>categories</p>
      </div>
    </div>
  )
}

export default Categories