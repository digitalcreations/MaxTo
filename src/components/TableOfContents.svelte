<script>
import Icon from 'mdi-svelte';
import { mdiChevronDown } from '@mdi/js';
import { slide } from 'svelte/transition';

import { stores } from '@sapper/app';
const { page } = stores();

export let contents;
export let level = 1;

$: levelClass = `level-${level}`;
</script>

<style>
ul {
    list-style: none;
    padding: 0;
}

li {
    display: block;
}

a {
    transition: background 0.25s ease-out;
    padding: var(--padding-small) var(--padding-large);
    text-decoration: none;
    display: block;
    margin: 0;
    display: flex;
    cursor: pointer;
}

a:hover {
    background: rgba(0,0,0,.05);
}

a.active {
    border-right: 2px solid var(--color-primary);
}

a span {
    display: block;
    flex: 1;
}

button  {
    background: transparent;
    border: none;
    outline: none;
}

.level-1 {
    margin-bottom: var(--padding-large);
}
.level-1 a {
    font-size: 1rem;
    color: black;
}
.level-2 a {
    font-size: 0.875rem;
    color: #555555;
}
.level-3 a {
    font-size: 0.75rem;
    color: #555555;
}
.level-3 li {
    margin: calc(var(--padding-small) / 2) 0;
}
.level-4 a {
    padding-left: var(--padding-huge);
}
</style>

<nav class={levelClass}>
    <ul>
        {#each contents as { title, href, children }, i}
        <li>
            <a {href} class:active={$page.path == href}>
                <span>{title}</span>

                {#if !!children && children.length > 0}
                <button><Icon path={mdiChevronDown} /></button>
                {/if}
            </a>

            {#if $page.path.startsWith(href) && !!children && children.length > 0}
            <div transition:slide>
                <svelte:self contents={children} level={level+1} ></svelte:self>
            </div>
            {/if}
        </li>
        {/each}
    </ul>
</nav>