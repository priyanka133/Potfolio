import React from 'react'


const Title = (props) => {
    
  return (
    <div className='container my-4'>
      <h2 className='Title'>{props.titles}</h2>
      <hr style={{border:"3px solid blue",width:"60px"}}/>
      <p>{props.desc}</p>
          </div>
  )
}

export default Title