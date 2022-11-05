import React from 'react'

import "./button.less";


const Button = ({onClick, name}) => {
  return (       
        <button onClick={onClick} className="btn">
            {name}
        </button>
  )
}

export default Button