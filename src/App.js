import logo from './logo.svg'
import TictactoeTable from './components/TictactoeTable'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [coordinates, setCoordinates] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  })
  const [coordinatesMemo, setCoordinatesMemo] = useState({
    0: [
      {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
      },
    ],
  })
  useEffect(() => {
    if (
      coordinates[0] + coordinates[1] + coordinates[2] === 'XXX' ||
      coordinates[0] + coordinates[1] + coordinates[2] === 'OOO'
    ) {
      setWinner(coordinates[0])
    } else if (
      coordinates[3] + coordinates[4] + coordinates[5] === 'XXX' ||
      coordinates[3] + coordinates[4] + coordinates[5] === 'OOO'
    ) {
      setWinner(coordinates[3])
    } else if (
      coordinates[6] + coordinates[7] + coordinates[8] === 'XXX' ||
      coordinates[6] + coordinates[7] + coordinates[8] === 'OOO'
    ) {
      setWinner(coordinates[6])
    } else if (
      coordinates[0] + coordinates[3] + coordinates[6] === 'XXX' ||
      coordinates[0] + coordinates[3] + coordinates[6] === 'OOO'
    ) {
      setWinner(coordinates[0])
    } else if (
      coordinates[1] + coordinates[4] + coordinates[7] === 'XXX' ||
      coordinates[1] + coordinates[4] + coordinates[7] === 'OOO'
    ) {
      setWinner(coordinates[1])
    } else if (
      coordinates[2] + coordinates[5] + coordinates[8] === 'XXX' ||
      coordinates[2] + coordinates[5] + coordinates[8] === 'OOO'
    ) {
      setWinner(coordinates[2])
    } else if (
      coordinates[0] + coordinates[4] + coordinates[8] === 'XXX' ||
      coordinates[0] + coordinates[4] + coordinates[8] === 'OOO'
    ) {
      setWinner(coordinates[0])
    } else if (
      coordinates[2] + coordinates[4] + coordinates[6] === 'XXX' ||
      coordinates[2] + coordinates[4] + coordinates[6] === 'OOO'
    ) {
      setWinner(coordinates[2])
    }
  }, Object.values(coordinates))

  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState('')

  function manageCoordinates(id) {
    let tempCoordinates = coordinates
    let index = Object.keys(coordinatesMemo).length - 1
    let tempMemo = coordinatesMemo

    if (tempCoordinates[id] === '') {
      tempCoordinates[id] = player
      setCoordinates(tempCoordinates)
      let coorForMemo = JSON.parse(JSON.stringify(tempCoordinates))
      tempMemo[index + 1] = coorForMemo
      setCoordinatesMemo(tempMemo)
      if (player === 'X') setPlayer('O')
      else setPlayer('X')
    }
  }
  function insertMemo(item) {
    console.log(coordinatesMemo[item])
    console.log(coordinates)
    console.log(item)
    if (parseInt(item) === 0) {
      setCoordinates({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
      })
    } else setCoordinates(coordinatesMemo[item])

    let coorMemo = JSON.parse(JSON.stringify(coordinatesMemo))

    let i = parseInt(item) + 1
    for (; i <= 9; i++) {
      delete coorMemo[i]
    }

    setCoordinatesMemo(coorMemo)
    if (item % 2 === 0) setPlayer('X')
    else setPlayer('Y')
    setWinner('')
  }
  let memCor = Object.keys(coordinatesMemo)

  function buttons(item) {
    if (item == 0) {
      return (
        <button
          key={item}
          onClick={() => insertMemo(item)}
          className=" border border-black p-2 mb-1 text-xl hover:bg-slate-300"
        >
          Go to game start
        </button>
      )
    } else {
      return (
        <button
          key={item}
          onClick={() => insertMemo(item)}
          className=" border border-black p-2 mb-1 text-xl hover:bg-slate-300"
        >
          Go to move #{item}
        </button>
      )
    }
  }

  return (
    <div className="flex flex-row">
      <div className="m-2">
        {winner ? (
          <h1 className=" text-2xl mb-2 ">Winner {winner}</h1>
        ) : (
          <h1 className=" text-2xl mb-2 ">Next Player: {player}</h1>
        )}
        <TictactoeTable
          coordinates={coordinates}
          player={player}
          manageCoordinates={manageCoordinates}
          winner={winner}
        />
      </div>
      <div className=" flex flex-col flex-wrap w-44 ml-10 mt-11">
        {memCor.map((item) => buttons(item))}
      </div>
    </div>
  )
}

export default App
