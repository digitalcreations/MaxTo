<script>
import Icon from 'mdi-svelte';
import { mdiMenu } from '@mdi/js';

export let icon = mdiMenu;
export let open = false;
</script>

<style>
section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100em;
    margin: 0 auto;
}

button {
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    outline: none;
}
button:hover {
    opacity: 0.9;
}

nav {
    flex: 1;
    border-right: 1px solid var(--color-box-border);
    min-width: 20em;
}

nav article {
    display: none;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

main {
    flex: 5;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

    
section.open nav article {
    display: block;
}

@media (min-width: 992px) {
    section {
        flex-direction: row;
    }
    
    button {
        display: none;
    }
    
    main {
        margin: 0 auto;
    }
    
    nav article {
        display: block;
    }
}
</style>

<section class:open>
    <nav>
        <header>
            <slot name="header"></slot>
            <button type="button" on:click={() => open = !open}>
                <Icon path={icon} size="medium" />
            </button>
        </header>

        <article><slot name="menu"></slot></article>
    </nav>
    
    <main><slot></slot></main>
</section>