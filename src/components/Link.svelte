<script>
import Icon from './Icon.svelte';

export let href;
export let icon = null;

$: displayedIcon = icon != null
    ? icon
    : href.startsWith('http') 
    ? "external-link" 
    : href.startsWith('mailto')
    ? 'envelope'
    : "book";
</script>

<style>
a {
	transition: all 0.25s ease-out;
	text-decoration: none;
    display: inline-block;
	margin: .2rem;
	padding: 0 0.5rem 0 0;
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border: 1px solid var(--color-box-border);
    background: white;
    color: var(--color-dark);
}

a :global(figure) {
	transition: all 0.25s ease-out;
    display: inline-block;
    vertical-align: bottom;
    background: var(--color-background);
    border-right: 1px solid var(--color-box-border);
    padding: 0 0.5rem;
}

a:hover {
    background: var(--color-primary);
    color: white;
    border-color: hsl(var(--color-primary-hue), var(--color-primary-sat), calc(0.9 * var(--color-primary-lit)));
}

a:hover :global(figure) {
    background: var(--color-primary);
    filter: brightness(90%);
    border-color: hsl(var(--color-primary-hue), var(--color-primary-sat), calc(0.9 * var(--color-primary-lit)));
    color: white;
}

a:hover :global(figure svg path) {
    fill: white;
}
</style>

<a {href} rel=prefetch>
    {#if displayedIcon}
    <Icon set="light" name={displayedIcon} />
    {/if} <slot/></a>