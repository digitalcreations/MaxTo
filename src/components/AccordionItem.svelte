<script>
import { onMount, getContext, createEventDispatcher } from 'svelte';
import { slide } from 'svelte/transition';
import Icon from 'mdi-svelte';
import { mdiChevronDown } from '@mdi/js';
import { ACCORDION } from './Accordion.svelte';

export let title = "";
export let open = false;

const { collapsible, add, setOpen } = getContext(ACCORDION);

let id = null;

onMount(() => id = add(o => open = o));

function toggle() {
    open = !open;
    setOpen(id, open);
}
</script>

<style>
article > header {
    padding: var(--padding-medium);
    border-top: 1px solid var(--color-box-border);
    border-bottom: 1px solid var(--color-box-border);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    cursor: pointer;
}

article > header h5 
{
    font-size: 1rem;
    font-weight: 400;
    flex: 1;
    margin: 0;
}

:global(article > header *) {
    transition: transform 0.25s ease-out;
}

:global(article.open > header svg) {
    transform: rotate(180deg);
    transform-origin: center center;
}

article > section {
    padding: var(--padding-medium);
}

article + :global(article) {
    margin-top: -1px;
}
</style>

<article class:open={open || !collapsible}>
    <header on:click={toggle}>
        <h5><slot name="title">{title}</slot></h5>

        {#if collapsible}
        <Icon path={mdiChevronDown} />
        {/if}
    </header>

    {#if open || !collapsible}
    <section transition:slide>
        <slot />
    </section>
    {/if}
</article>