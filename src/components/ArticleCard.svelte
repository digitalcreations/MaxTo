<script>
import { onMount } from 'svelte';

import Card from './Card.svelte';
import Icon from 'mdi-svelte';
import { mdiArrowRight } from '@mdi/js';

import { stores } from '@sapper/app';
const { page } = stores();

export let title;
export let icon;
export let href = null;
export let articles = [];
export let color = "primary";
</script>

<style>
nav {
    position: relative;
    overflow: hidden;
    padding: var(--padding-large);
}

nav > :global(figure) {
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    opacity: 0.15;
}

nav > :global(figure path) {
    fill: var(--color);
}

h2 {
    font-weight: 400;
    font-size: 1.875rem;
}

ul {
    list-style: none;
    padding: 0;
}
li a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    border-bottom: 1px solid transparent;
    transition: border 0.25s ease-out;
    margin-bottom: var(--padding-small);
}

li a.active
{
    font-weight: 600;
}

li a:hover {
    border-bottom: 1px solid black;
}

p a {
    color: var(--color);
    cursor: pointer;
    text-decoration: none;
}

p a :global(svg) {
    transition: transform 0.25s ease-out;
}

p a:hover :global(svg)
{
    transform: translateX(0.5rem);
}

p a :global(svg) {
    display: inline-block;
}
p a :global(svg path) {
    fill: var(--color);
}
</style>

<Card type=stacked padding={false}>
    <nav style="--color: var(--color-{color})">
        <Icon path={icon} size=4 color="var(--color)" />
    
        <h2>{title}</h2>
        
        <ul>
        {#each articles as { href, title }}
            <li><a {href} class:active={href == $page.path}>{title}</a></li>
        {/each}
        </ul>
        
        <p>
            <a {href}>Read more <Icon path={mdiArrowRight} /></a>
        </p>
    </nav>
</Card>