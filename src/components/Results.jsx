import React from 'react'

export default function Results({Results}) {
  return (
    <div>
        {Results.map((result)=>(
        <div key={result.id}> {result.name} </div>
        ))}
    </div>
  )
}
