<script context="module">
export async function preload(page) {
    const { category, name } = page.params;
    const res = await this.fetch(`triggers.json`);
    const { en } = await res.json();

    const trigger = { category, name, ...en[`${category}:${name}`] };
    
    return { trigger };
}
</script>

<script>
import { Trigger } from '../../../../components.js';
import { onMount } from 'svelte';

// This approach is horrible. We should use dynamic imports
// and svelte:component, but I couldn't get that to work.
// import WindowMove from './../../../../components/triggers/WindowMove.svelte';

const map = {
}

export let trigger;
const component = (map.hasOwnProperty(trigger.category) ? map[trigger.category] : [])[trigger.name];
</script>

<svelte:head>
    <title>{trigger.displayName} - MaxTo reference manual</title>
</svelte:head>

<Trigger {trigger}></Trigger>

{#if !!component}
  <svelte:component this={component} />
{/if}