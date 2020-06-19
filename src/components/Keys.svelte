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
	transition: all 0.25s ease-out;
	text-decoration: none;
    display: inline-flex;
	margin: .2rem;
	padding: 0 0.5rem 0 0;
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border: 1px solid var(--color-box-border);
    background: white;
    color: var(--color-dark);
}

section > span :global(figure) {
	transition: all 0.25s ease-out;
    display: inline-block;
    vertical-align: baseline;
    background: var(--color-background);
    border-right: 1px solid var(--color-box-border);
    padding: 0 0.5rem 0 0.5rem;
    margin-right: 0.5rem;
}

kbd {
    display: inline-block;
    font-family: var(--font-family);
}

kbd + kbd:before {
    content: "+";
    display: inline-block;
    margin: 0 0.25rem;
    font-family: var(--font-family);
}

kbd span {
    display: inline-block;
    vertical-align: baseline;
}
</style>

<section>
<span>
<Icon set="light" name="keyboard" />
</span>
{#each parts as { title, icon }}
<kbd>
{#if icon != null}
<span>
<Icon set={icon[0]} name={icon[1]} />
</span>
{:else}
{title}
{/if}
</kbd>
{/each}
</section>