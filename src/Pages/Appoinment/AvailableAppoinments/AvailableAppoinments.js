import React from 'react'

const AvailableAppoinments = ({date}) => {
  return (
    <div>
      <h3>Available appionments {date.toDateString()}</h3>
    </div>
  )
}

export default AvailableAppoinments
