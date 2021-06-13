<script context="module">
export async function load({ page, fetch }) {
    const { category } = page.params;
    const res = await fetch(`/reference/commands/${category}.json`);
    const commands = await res.json();
    return { props: { category, commands } };
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