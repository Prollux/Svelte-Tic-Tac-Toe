

<script>
  import { onMount } from "svelte";
  import Board from './components/Board.svelte' 


  const matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
  ]

  let player = 'X'

  const changePlayer = () => {
    player = (player === 'X' ? 'O' : 'X')
  }

  let nodes

  onMount(() => {
    nodes = document.getElementsByClassName('tile')
  })

  const validateBoard = () => {
    
  }

</script>

<main>
  <h1>Current Player: {player}</h1>
  <Board matrix={matrix} changePlayer={changePlayer} player={player} />
</main>