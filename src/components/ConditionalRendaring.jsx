import React, { useState } from 'react'

const ConditionalRendaring = () => {
    const [visible, setVisible] = useState(false);
    const handleVisbility = () => {
        setVisible(prev => !prev);
    }
    return (
        <div>
            {visible === true ?
                (<p style={{ padding: '10', border: '1px solid blue', width: '500px', height: '130px', borderRadius: '10px', boxShadow: '1px white', fontFamily: 'saint' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam illo harum beatae doloremque itaque assumenda necessitatibus consectetur
                    nesciunt illum aliquam asperiores cupiditate,
                    ullam quae alias, autem totam qui! Molestiae, quas!</p>) : null
            }
            <button onClick={handleVisbility}>{visible ? 'Hide Paragraph' : 'Show Paragraph'}</button>
            {/* //jokhoni visible true hobe Hide Paragrapph likha ta button e visible hobe abar jokhoni false hobe Show Paragraph chole ashbe */}
        </div>
    )
}

export default ConditionalRendaring