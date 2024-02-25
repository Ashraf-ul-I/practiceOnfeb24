import React, { useEffect, useState } from 'react';
import db from './db.json';

const SearchFunctionality = () => {
    const [data, setData] = useState([]);
    const [check, setCheck] = useState([]);

    useEffect(() => {
        //mehod 1 to get the data
        // const allItems = Object.values(db).flat(); // Extracting all arrays and flattening them into a single array
        // method 2 to get the data
        const allItems = [];
        Object.keys(db).forEach(key => {
            allItems.push(...db[key]);
        })

        //method3 to get the data

        // const allItems = [];
        // if (db && db.fruits && db.fruits.length) {
        //     allItems.push(...db.fruits);
        // }
        // if (db && db.vagetables && db.vagetables.length) {
        //     allItems.push(...db.vagetables);
        // }
        setData(allItems);
        setCheck(allItems);
    }, []);
    const onSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        console.log('searchValue', searchValue) // Convert the search value to lowercase for case-insensitive comparison
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchValue) || // Check if the item name includes the search value
            item.type.toLowerCase().includes(searchValue) || // Check if the item type includes the search value
            item.price.toLowerCase().includes(searchValue) || // Check if the item price includes the search value
            item.importedFrom.toLowerCase().includes(searchValue) // Check if the importedFrom includes the search value
        );
        setCheck(filteredData);
    }


    console.log('d', data);
    console.log('e',);


    //grid gap-8 m-4 sm:grid-cols-2 sm:px-28
    return (
        <div>
            <h1 className='flex justify-center font-bold p-5 text-3xl'>Search Fruits And Vegetables</h1>
            <div style={{ width: 'full', display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={onSearchChange}
                    style={{ width: '50%', border: '1px solid grey' }}
                    className=" p-2 border border-gray-300 rounded"
                />
            </div>
            {check &&
                <div className='grid gap-4 m-4 sm:grid-cols-4 sm:px-4'>
                    {check.map((item, index) => (
                        console.log('c', item),
                        <div key={index} className='sm:min-h-[120px] sm:p-3 rounded shadow-xl border border-blue-300 '>
                            <p style={{ margin: 0 }}><strong>Name:</strong> {item.name}</p>
                            <p style={{ margin: 0 }}><strong>Type:</strong> {item.type}</p>
                            <p style={{ margin: 0 }}><strong>Price:</strong> {item.price}</p>
                            <p style={{ margin: 0 }}><strong>Imported from:</strong> {item.importedFrom}</p>
                        </div>
                    ))}
                </div>
            }

        </div>


    );
}

export default SearchFunctionality;
