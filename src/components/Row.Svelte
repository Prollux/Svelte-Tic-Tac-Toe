<script>
  import Tile from './Tile.svelte'
  export let indices
  export let changePlayer
  export let player
  export let spaces
</script>

<div class="row-wrapper">
 {#each indices as id}
    <Tile id={id} changePlayer={changePlayer} player={player} spaces={spaces}/>
  {/each}
</div>

<style>
  .row-wrapper {
    display:flex;
    flex-direction: row;
  }
</style>