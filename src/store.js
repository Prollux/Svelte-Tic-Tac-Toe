import { writable } from 'svelte/store'

export let spacesStore = writable(['', '', '', '', '','', '', '', ''])

export let winnerStore = writable(null)

export let turnStore = writable(0)
