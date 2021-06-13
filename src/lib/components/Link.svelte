<script>
import Icon from 'mdi-svelte';
import { mdiLink, mdiEmail, mdiNotebook } from '@mdi/js';

export let href;
export let icon = null;

$: displayedIcon = icon != null
    ? icon
    : href.startsWith('http') 
    ? mdiLink
    : href.startsWith('mailto')
    ? mdiEmail
    : mdiNotebook;
</script>

<style>
a {
	transition: all 0.25s ease-out;
	text-decoration: none;
    display: inline-block;
	padding: 0 0.5rem 0 0;
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border: 1px solid var(--color-box-border);
    background: white;
    color: var(--color-dark);
}

a span {
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

a:hover span {
    background: var(--color-primary);
    filter: brightness(90%);
    border-color: hsl(var(--color-primary-hue), var(--color-primary-sat), calc(0.9 * var(--color-primary-lit)));
    color: white;
}

a :global(svg path) {
    transition: fill 0.25s ease-in-out;
}

a:hover :global(svg path) {
    fill: white;
}
</style>

<a {href} rel=prefetch>
    {#if displayedIcon}
    <span><Icon path={displayedIcon} size="0.875rem" /></span>
    {/if} <slot/></a>