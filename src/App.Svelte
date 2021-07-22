

<script>
  import { onMount } from "svelte";
  import Board from './components/Board.svelte' 


  const emptySpaces = ['', '', '', '', '','', '', '', '']

  let spaces = [...emptySpaces]

  let player = 'X'

  let winner = null

  const changePlayer = () => {
    player = (player === 'X' ? 'O' : 'X')
  }

  const ResetBoard = () => {
    spaces = [...emptySpaces]
  }

  const validateBoard = () => {
    let possibleSolves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < possibleSolves.length; i++) {
      let currentRow = possibleSolves[i].map(index => spaces[index])
      let toMatch = currentRow[0]
      if (toMatch !== '' && toMatch === currentRow[1] && toMatch === currentRow[2]) {
        winner = toMatch
        console.log(`player ${winner} wins!`)
        break;
      }
    }
  }

</script>

<main>
  <h1>Current Player: {player}</h1>
  <button id='reset' on:click={ResetBoard}>Reset</button>
  <Board spaces={spaces} changePlayer={changePlayer} validateBoard={validateBoard} player={player} />
</main>