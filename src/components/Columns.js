import React from 'react'

function Columns() {
    const items=[]
  return (


    <React.Fragment>
      {items.map((k)=>(
        <React.Fragment key={k.id}>
          <h1>k.title</h1>
         </React.Fragment>
))}
        <td>Table data 1</td>
        <td>Table data 2</td>
     </React.Fragment>
  )
}

export default Columns