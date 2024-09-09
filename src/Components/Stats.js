import React from 'react'

function Stats({items}) {

  const numItems = items.length;
  const numpacked = items.filter((items)=>{
    
  }) 

  return (
    <footer className='stats'>
    <em>
        you have {numItems} items on your list

    </em>    
    </footer>
  )
}

export default Stats