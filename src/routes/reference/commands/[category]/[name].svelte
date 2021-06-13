<script context="module">
export async function load({ page, fetch }) {
    const { category, name } = page.params;
    const res = await fetch(`/commands.json`);
    const { en } = await res.json();

    const command = { category, name, ...en[`${category}:${name}`] };
    
    return { props: { command } };
}
</script>

<script>
    import Command from '$lib/components/Command.svelte';

    // This approach is horrible. We should use dynamic imports
    // and svelte:component, but I couldn't get that to work.
    import WindowMove from '$lib/components/Commands/WindowMove.svelte';

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