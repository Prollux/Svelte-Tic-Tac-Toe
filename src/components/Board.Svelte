<script>
  import Row from './Row.svelte'

  export let changePlayer
  export let player
  export let matrix
</script>

<div class='board'>
  {#each matrix as indices}
    <Row indices={indices} player={player} changePlayer={changePlayer} />
  {/each}
</div>

