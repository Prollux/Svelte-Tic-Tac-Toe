

<script>
  import { onMount } from "svelte";
  import Board from './components/Board.svelte' 
  const emptySpaces = ['', '', '', '', '','', '', '', '']

  let spaces = [...emptySpaces]

  let player = 'X'

  const changePlayer = () => {
    player = (player === 'X' ? 'O' : 'X')
  }

  const ResetBoard = () => {
    spaces = [...emptySpaces]
  }

  const validateBoard = () => {
    
  }

</script>

<main>
  <h1>Current Player: {player}</h1>
  <button id='reset' on:click={ResetBoard}>Reset</button>
  <Board spaces={spaces} changePlayer={changePlayer} player={player} />
</main>