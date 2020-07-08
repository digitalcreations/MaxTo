<script>
import Card from './Card.svelte';
import Icon from './Icon.svelte';

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

li a:hover {
    border-bottom: 1px solid black;
}

p a {
    color: var(--color);
    cursor: pointer;
    text-decoration: none;
}

p a :global(figure) {
    transition: transform 0.25s ease-out;
}

p a:hover :global(figure)
{
    transform: translateX(0.5rem);
}

p a :global(figure) {
    display: inline-block;
}
p a :global(figure path) {
    fill: var(--color);
}
</style>

<Card type=stacked padding={false}>
    <nav style="--color: var(--color-{color})">
        <Icon name={icon} set="light" size=giant />
    
        <h2>{title}</h2>
        
        <ul>
        {#each articles as { href, title }}
            <li><a {href}>{title}</a></li>
        {/each}
        </ul>
        
        <p>
            <a {href}>Read more <Icon name="arrow-right" set="light" /></a>
        </p>
    </nav>
</Card>