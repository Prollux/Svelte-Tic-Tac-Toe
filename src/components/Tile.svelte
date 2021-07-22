<script>
  import { onDestroy } from 'svelte';
  import { winnerStore, turnStore } from '../store.js'
  export let validateBoard
  export let changePlayer
  export let id
  export let player
  export let spaces

  let winner

  const unsubWinners = winnerStore.subscribe(value => {
    winner = value
  })

  let turns

  const unsubTurns = turnStore.subscribe(value => {
    turns = value
  })

  onDestroy(unsubWinners, unsubTurns)

  const updateTile = (e) => {
    e.preventDefault()
    if (!winner && spaces[id] === '') {
      spaces[id] = player
      turnStore.set(turns + 1)
      changePlayer()
      validateBoard()
    }
  }
</script>

  <button class='tile' id={`tile${id}`} on:click={updateTile}>{spaces[id]}</button>

  <style>
    .tile {
      display: inline-block;
      background-color: white;
      border-style:groove;
      border-color: black;
      height: 25vh;
      width: 25vh;
      font-size: 20vh;
      text-align: center;
      vertical-align: top;
      margin: -1px;
    }
  </style>