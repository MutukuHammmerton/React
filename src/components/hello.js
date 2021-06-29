import React from 'react'

    //{with jsx}
const Hello = () => {
    // return (
    //    <div className='dummyclass'>
    //        <h1>Hello Hammerton</h1>
    //    </div>
    // )
//without jsx
return React.createElement(
    'div',
    {id:'hello', className: 'dummyclass'},
    React.createElement('h1', null, 'hammerton')
)
 }

    

export default Hello