import React from 'react'
import './myStyles.css'

const heading = {
    fontsize: '72px',
    color: 'blue'
}

function StyleSheet() {
    return (
        <div>
            <div>
                <h1 className='primary font-xl'>Sytleshhet</h1>
            </div>
            <div>
                <h1 style={heading}>Inline</h1>
            </div>
        </div>
    )
}

export default StyleSheet
