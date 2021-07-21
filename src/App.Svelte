

<script> 
  import Tile from './components/Tile.svelte' 
  let player = 'X'

  const changePlayer = () => {
    player = (player === 'X' ? 'O' : 'X')
  }

</script>

<main>
  <h1>Current Player: {player}</h1>
  <Tile id='1' changePlayer={changePlayer} player={player} />
</main>