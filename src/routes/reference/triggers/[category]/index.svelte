<script context="module">
export async function load({ page, fetch }) {
    const { category } = page.params;
    const res = await fetch(`/reference/triggers/${category}.json`);
    const triggers = await res.json();
    return { props: { category, triggers } };
}
</script>

<script>
  import LinkList from '$lib/components/LinkList.svelte';
  import LinkListItem from '$lib/components/LinkListItem.svelte';
  import SegoeIcon from '$lib/components/SegoeIcon.svelte';
  import Code from '$lib/components/Code.svelte';
  
  import { mdiLightningBolt } from '@mdi/js';
  
  export let category;
  export let triggers;
</script>

<style>
h3 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0 0 0.5rem 0;
}
</style>

<svelte:head>
  <title>MaxTo triggers reference</title>
</svelte:head>

<h1>These are the triggers in the <b>{category}</b> category.</h1>

<LinkList>
    {#each triggers as trigger}
    <LinkListItem href={`/reference/triggers/${trigger.category}/${trigger.name}`}>
        <SegoeIcon icon={trigger.icon}></SegoeIcon>
        <section>
            <h3>{trigger.displayName}</h3>
            <Code icon={mdiLightningBolt}>{trigger.category}:{trigger.name}</Code>
        </section>
    </LinkListItem>
    {/each}
</LinkList>