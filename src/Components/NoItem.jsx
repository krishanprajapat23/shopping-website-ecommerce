import React from 'react'
import { Link } from 'react-router-dom'

function NoItem() {
  return (
    <>
    <div className="no-item-wrapper">
        <div>No Item is here</div>
        <p className='desc'>Go to <Link className='link' to='/'>Home</Link></p>    
    </div>
    
    </>
  )
}

export default NoItem