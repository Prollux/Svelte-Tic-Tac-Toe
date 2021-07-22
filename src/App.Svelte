

<script>
  import { onMount } from "svelte";
  import Board from './components/Board.svelte' 


  const spaces = ['', '', '', '', '','', '', '', '']

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
  <Board spaces={spaces} changePlayer={changePlayer} player={player} />
</main>