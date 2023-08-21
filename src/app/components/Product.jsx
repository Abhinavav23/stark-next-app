'use client';

import React, { useState } from 'react'

export const Product = ({name}) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <h3>Product-{name}</h3>
            <div>quantity - {quantity}</div>
            <button onClick={() => setQuantity(quantity+1)}>+</button>
        </>
    )
}

// export default Header