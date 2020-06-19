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
import { Command, CommandExample, Code } from '../../../../components.js';

export let command;
</script>

<svelte:head>
    <title>{command.displayName} - MaxTo reference manual</title>
</svelte:head>

<Command {command}></Command>
