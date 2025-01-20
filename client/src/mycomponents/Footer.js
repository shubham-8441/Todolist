import React from 'react'

export const Footer = () => {


  let footerstyle = {
    position: "relative",
    top: "500px",
    height: "80px",
}
  
  return (
    
    <div>
      <footer className='bg-dark py-3 text-light my-3 ' style={footerstyle}>
        <p className='text-center'>
        copyright © shubham| 2025| All Rights Reserved.
        </p>
      </footer>

    </div>
  )
}
