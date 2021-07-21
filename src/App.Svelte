

<script> 
  import Row from './components/Row.svelte' 


  let player = 'X'

  const changePlayer = () => {
    player = (player === 'X' ? 'O' : 'X')
  }

</script>

<main>
  <h1>Current Player: {player}</h1>
  <Row indices={[1, 2, 3]} changePlayer={changePlayer} player={player} />
</main>