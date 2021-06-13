<script context="module">
function filterCategory(commands, category) {
    return Object.keys(commands)
        .filter(k => k.startsWith(category + ":"))
        .map(k => map(k, commands[k]))
}

function map(name, command) {
    return {
        category: name.substr(0, name.indexOf(':')),
        name: name.substr(name.indexOf(':') + 1),
        ...command
    };
}

export async function load({ page, fetch }) {
    const { category } = page.params;
    const res = await fetch(`/commands.json`);
    const { en } = await res.json();
    return { props: { category, commands: filterCategory(en, category) } };
}
</script>

<script>
  import LinkList from '$lib/components/LinkList.svelte';
  import LinkListItem from '$lib/components/LinkListItem.svelte';
  import SegoeIcon from '$lib/components/SegoeIcon.svelte';
  import Code from '$lib/components/Code.svelte';
  
  import { mdiConsole } from '@mdi/js';
  
  export let category;
  export let commands;
</script>

<style>
    h3 {
        font-size: 1rem;
        font-weight: normal;
        margin: 0 0 0.5rem 0;
    }
</style>

<svelte:head>
  <title>MaxTo commands reference</title>
</svelte:head>

<h1>These are the commands in the <b>{category}</b> category.</h1>

<LinkList>
    {#each commands as command}
    <LinkListItem href={`/reference/commands/${command.category}/${command.name}`}>
        <SegoeIcon icon={command.icon}></SegoeIcon>
        <section>
            <h3>{command.displayName}</h3>
            <Code icon={mdiConsole}>{command.category}:{command.name}</Code>
        </section>
    </LinkListItem>
    {/each}
</LinkList>