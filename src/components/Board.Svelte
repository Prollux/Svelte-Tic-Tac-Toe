<script>
  import Row from './Row.svelte'

  export let validateBoard
  export let changePlayer
  export let player
  export let spaces
  let matrix  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]
</script>

<div class='board'>
  {#each matrix as indices}
    <Row indices={indices} player={player} changePlayer={changePlayer} spaces={spaces} validateBoard={validateBoard}/>
  {/each}
</div>

