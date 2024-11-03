import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories({categories}) {
  return (
    <div role="tablist" className="tabs tabs-lifted">
        {
            categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`} role="tab" className={({isActive})=> `tab text-2xl font-thin ${isActive? 'tab-active' : ''}` }>
            {category.category}
          </NavLink>)
        }
      </div>
  )
}
