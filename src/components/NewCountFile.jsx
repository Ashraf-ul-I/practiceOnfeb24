// import React, { useEffect, useState, useContext } from 'react';
// import CountContext from '../context/CountContext';

// const NewCountFile = () => {
//     const [limitCount, setLimitCount] = useState(0);
//     const { count, setCounter } = useContext(CountContext); // Access both count and setCounter

//     useEffect(() => {
//         console.log("Count:", count);
//         if (count > 3) {
//             setLimitCount(count);
//         } else {
//             setLimitCount(0);
//         }
//         console.log("Limit Count:", limitCount);
//     }, [count]);

//     // Check if count is initially available and set limitCount accordingly
//     useEffect(() => {
//         if (count !== undefined) {
//             setLimitCount(count > 3 ? count : 0); // Handle initial count value
//         }
//     }, [count]);

//     return (
//         <div>
//             <h3>Count: {limitCount}</h3>
//         </div>
//     );
// };

// export default NewCountFile;
import React, { useEffect, useState, useContext } from 'react';
import CountContext from '../context/CountContext';

const NewCountFile = () => {
    const [limitCount, setLimitCount] = useState(0);
    const { count } = useContext(CountContext);

    useEffect(() => {
        console.log("Counter:", count);
        const update = count;

        if (update > 3) {
            setLimitCount(update);
        } else {
            setLimitCount(0)
        }
    }, [count]);

    return (
        <div>
            <h3>Count: {limitCount}</h3>
        </div>
    );
};

export default NewCountFile;
