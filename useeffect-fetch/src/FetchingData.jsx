import React, { useEffect, useState } from 'react'

export default function FetchingData() {
    const [users , setUsers] = useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/photos')
                const data = await res.json()

                setUsers(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
  return ( 
    <div>
        <h1>fetching data</h1>
        {
            users.map((photo) => (
                <div key={photo.id}>
                    <div>{photo.url}</div>
                    <div>{photo.title}</div>
                </div>
            ))
        }

    </div>
  )
}
