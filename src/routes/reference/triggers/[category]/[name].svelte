<script context="module">
export async function load({ page, fetch }) {
    const { category, name } = page.params;
    const res = await fetch(`/reference/triggers/${category}/${name}.json`);
    const trigger = await res.json();

    return { props: { trigger } };
}
</script>

<script>
  import Trigger from '$lib/components/Trigger.svelte';

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