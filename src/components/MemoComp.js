import React from 'react'

function MemoComp({name}) {
  return (
    <div>MemoComp {name}</div>
  )
}

export default React.memo(MemoComp);