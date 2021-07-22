<script>
  import Tile from './Tile.svelte'
  export let validateBoard
  export let changePlayer
  export let indices
  export let player
  export let spaces
</script>

<div class="row-wrapper">
 {#each indices as id}
    <Tile id={id} changePlayer={changePlayer} player={player} spaces={spaces} validateBoard={validateBoard}/>
  {/each}
</div>

<style>
  .row-wrapper {
    display:flex;
    flex-direction: row;
    justify-content: center;
  }
</style>