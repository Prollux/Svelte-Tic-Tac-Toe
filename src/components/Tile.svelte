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

  <button class='tile' id={id} on:click={updateTile}></button>

  <style>
    .tile {
      display: inline-block;
      background-color: white;
      border-style:groove;
      border-color: black;
      height: 40px;
      width: 40px;
      text-align: center;
      vertical-align: top;
      margin: -1px;
    }
  </style>