import React, { useEffect, useState } from 'react'

function ChangeColor() {
    const [color,setColors ] = useState('yellow');

    useEffect(() => {    
        setTimeout(() => {
            setColors('red')
          }, 5000)
       });
  return (
    <div>
        <div>
          <div
            style={{
              backgroundColor: color,
              paddingTop: 20,
              width: 400,
              height: 80,
              margin: 'auto'
            }}
          />
        </div>
      </div>
  )
}

export default ChangeColor