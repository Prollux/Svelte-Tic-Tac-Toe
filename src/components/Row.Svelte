<script>
  import Tile from './Tile.svelte'
  export let indices
  export let changePlayer
  export let player
</script>

<div class="row-wrapper">
 {#each indices as id}
    <Tile id={id} changePlayer={changePlayer} player={player} />
  {/each}
</div>

<style>
  .row-wrapper {
    display:flex;
    flex-direction: row;
  }
</style>