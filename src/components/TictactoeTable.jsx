import React from 'react'

function TictactoeTable({ coordinates, player, manageCoordinates, winner }) {
  let coord = Object.keys(coordinates)

  return (
    <div className=" border border-black grid grid-cols-3 gap-0 bg-slate-200 ">
      {coord.map((item) => (
        <button
          key={item}
          onClick={() => manageCoordinates(item, player)}
          className=" border border-black w-24 h-24 text-4xl"
          disabled={winner}
        >
          {coordinates[item]}
        </button>
      ))}
    </div>
  )
}

export default TictactoeTable
