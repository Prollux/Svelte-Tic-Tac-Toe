

<script>
  import { onDestroy } from "svelte";
  import Board from './components/Board.svelte' 
  import { spacesStore, winnerStore, turnStore } from './store.js'

  let turns

  const unsubTurns = turnStore.subscribe(value=> {
    turns = value
  })

  let spaces

  const unsubSpaces = spacesStore.subscribe(value => {
    spaces = value
  })

  onDestroy(unsubSpaces, unsubTurns)

  const emptySpaces = ['', '', '', '', '','', '', '', '']

  let player = 'X'

  let winner

  winnerStore.subscribe(value => {
    winner = value
  })

  const changePlayer = () => {
    player = (player === 'X' ? 'O' : 'X')
  }

  const ResetBoard = () => {
    spaces = [...emptySpaces]
    winnerStore.set(null)
    turnStore.set(0)
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
        winnerStore.set(toMatch)
        break;
      }
    }
  }

</script>

<main>
  {#if turns >= 9 && !winner}
    <h1>Draw!</h1>
  {:else if winner}
      <h1>Player {winner} wins!</h1>
  {:else}
    <h1>Current Player: {player}</h1>
  {/if}
  <div class='reset-wrapper'>
    <button id='reset' on:click={ResetBoard}>Reset</button>
  </div>
  <Board spaces={spaces} changePlayer={changePlayer} validateBoard={validateBoard} player={player} />
</main>

<style>
  h1 {
    text-align: center;
  }
  button {
    width: 50px;
    margin-bottom: 20px;
  }
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .reset-wrapper {
    display: flex;
    justify-content: center;
  }

</style>