<script>
  import { onDestroy } from 'svelte';
  import { winnerStore } from '../store.js'
  export let validateBoard
  export let changePlayer
  export let id
  export let player
  export let spaces

  let winner

  const unsubscribe = winnerStore.subscribe(value => {
    winner = value
  })

  onDestroy(unsubscribe)

  const updateTile = (e) => {
    e.preventDefault()
    if (!winner && spaces[id] === '') {
      spaces[id] = player
      changePlayer()
      validateBoard()
    }
  }
</script>

  <button class='tile' id={'tile{id}'} on:click={updateTile}>{spaces[id]}</button>

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