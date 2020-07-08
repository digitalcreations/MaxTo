<script context="module">
export async function preload(page) {
    const { category, name } = page.params;
    const res = await this.fetch(`commands.json`);
    const { en } = await res.json();

    const command = { category, name, ...en[`${category}:${name}`] };
    
    return { command };
}
</script>

<script>
import { Command } from '../../../../components.js';
import { onMount } from 'svelte';

// This approach is horrible. We should use dynamic imports
// and svelte:component, but I couldn't get that to work.
import WindowMove from './../../../../components/Commands/WindowMove.svelte';

const map = {
    window: {
        move: WindowMove
    }
}

export let command;
const component = (map.hasOwnProperty(command.category) ? map[command.category] : [])[command.name];
</script>

<svelte:head>
    <title>{command.displayName} - MaxTo reference manual</title>
</svelte:head>

<Command {command}></Command>

{#if !!component}
  <svelte:component this={component} />
{/if}