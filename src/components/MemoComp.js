import React from 'react'

function MemoComp({name}) {
    console.log('rendering on memoComp ')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp) 
