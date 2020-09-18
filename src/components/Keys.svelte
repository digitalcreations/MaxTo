<script>
import Icon from './Icon.svelte';

export let combination;

const map = {
    windows: ["brands", "windows"],
    left: ["regular", "arrow-left"],
    right: ["regular", "arrow-right"],
    up: ["regular", "arrow-up"],
    down: ["regular", "arrow-down"]
};

$: parts = combination
    .split('+')
    .map(p => ({
        title: p,
        icon: map.hasOwnProperty(p.toLowerCase()) ? map[p.toLowerCase()] : null
    }));
</script>

<style>
section {
    display: inline;
}

kbd {
    display: inline-block;
    font-family: var(--font-family);
    background: var(--color-default);
    border-radius: 2px;
    padding: 4px;
    font-size: var(--font-size-small);
}

span :global(figure) {
    display: inline-block;
}

span:after {
    content: '+';
    display: inline-block;
    margin: 0 4px 0 0;
}
span:last-child::after {
    content: '';
}

</style>

<section>
{#each parts as { title, icon }}
<span>
<kbd>
{#if icon != null}
<Icon set={icon[0]} name={icon[1]} />
{:else}
{title}
{/if}
</kbd>
</span>
{/each}
</section>