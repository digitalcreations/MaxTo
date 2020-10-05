<script>
import Icon from 'mdi-svelte';
import Card from './Card.svelte';

export let icon;
export let title;
export let text;
export let href;
</script>

<style>
    a {
        flex: 1 0 30%;
        min-width: 30%;
        display: flex;
        justify-self: stretch;
        align-self: stretch;
        justify-items: stretch;
        align-items: stretch;
        text-align: center;
        transition: opacity 0.25s ease-in-out;
        text-decoration: none;
        color: black;
    }
    
    a > :global(*) {
        transition: all 0.25s ease-out;
        width: 100%;
    }

    a:hover {
        z-index: 100;
    }

    a:hover > :global(*) {
        transform: scale(1.05);
        box-shadow: var(--box-shadow-raised);
        border-color: var(--color-primary);
    }
    
    h1 {
        margin: 0;
        font-size: 2rem;
    }
    
    figure {
        opacity: 0.7;
        margin-bottom: var(--padding-medium);
    }
</style>

<a rel=prefetch {href}>
    <Card>
        <span slot="badge"><slot name="badge"/></span>
        <figure>
            <Icon path={icon} size=4  />
        </figure>

        <h1>{title}</h1>
        <p>
            {text}
        </p>
    </Card>
</a>