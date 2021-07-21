<script>
  export let id
  export let player
  export let changePlayer
  const updateTile = (e) => {
    if (!e.srcElement.innerText) {
      e.srcElement.innerText = player
      changePlayer()
    }
  }
</script>


<main>
  <button id={id} on:click={updateTile}></button>
</main>