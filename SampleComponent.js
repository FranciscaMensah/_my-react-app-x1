import React from 'react';
import './index.css'

export default function SampleComponent(props){
    const styleObj = {
        backgroundColor: props.color,
        width: `${props.size}px`,
        color: props.textColor
    }
  return(
    <div className='sc' style={styleObj}>
        <div>
            Me
        </div>
    </div>
  )
}