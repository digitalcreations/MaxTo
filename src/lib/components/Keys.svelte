<script>
import Icon from 'mdi-svelte';
import { mdiMicrosoftWindows, mdiArrowLeft, mdiArrowRight, mdiArrowUp, mdiArrowDown } from '@mdi/js';

export let combination;

const map = {
    windows: mdiMicrosoftWindows,
    left: mdiArrowLeft,
    right: mdiArrowRight,
    up: mdiArrowUp,
    down: mdiArrowDown
};

$: parts = combination
    .split('+')
    .map(p => ({
        title: p,
        icon: map.hasOwnProperty(p.toLowerCase()) ? map[p.toLowerCase()] : null
    }));
</script>

<style>
span.combo {
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

<span class="combo">
{#each parts as { title, icon }}
<span>
<kbd>
{#if icon != null}
<Icon path={icon} />
{:else}
{title}
{/if}
</kbd>
</span>
{/each}
</span>