import React from 'react'

const Error = ({children}) => {
  return (
    <div className='error'>
        <p>{children}</p>
    </div>    
  )
}

export default Error
