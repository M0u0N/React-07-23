import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function YksPostitus() {
    const {postituseId} = useParams();
    const [postitus, uuendaPostitused] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postituseId)
            .then(res => res.json())
            .then(data => uuendaPostitused(data))
    }, [postituseId]);

  return (
    <div>
        <div><i>{postitus.userId}</i> </div>
        <div><u>{postitus.id}</u></div>
        <div><b>{postitus.title}</b></div>
        <div>{postitus.body}</div>
    </div>
  )
}

export default YksPostitus