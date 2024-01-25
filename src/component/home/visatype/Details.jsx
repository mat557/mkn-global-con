import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    let content
    const {type} = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('/info/workInfo.json')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status}`);
            }
            return res.json();
        })
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));

    },[])
    let c = type
    let info = data.find(value => value.tag === type)


    content = (
        <div className='max-w-[1300px] mx-auto'>
            <div class="max-w-[90%] mx-auto bg-white rounded p-6 shadow-md mt-[10vh]">
                <p class="text-xl font-bold mb-4">About {type} visa</p>
                <p>{info?.info}</p>
            </div>
        </div>
    )

    return content
}

export default Details