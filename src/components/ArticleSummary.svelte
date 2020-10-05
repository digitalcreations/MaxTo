<script>
import Icon from './Icon.svelte';
import { afterUpdate, onMount } from 'svelte';

let top;
let height;
$: bottom = top + height;
export let headerSelector = "article > h2";
let headers = [];
let slotNode;

function slotDom(node) {
    slotNode = node;
}

afterUpdate(() => {
    headers = Array.from(slotNode.querySelectorAll(headerSelector));
    
    const top = slotNode.firstChild;
    top.setAttribute('id', 'top');
    top.setAttribute('data-title', 'top')
    headers.unshift(top);
    
    headers.forEach((h, i) => {
        if (!h.getAttribute('id')) {
            h.setAttribute('id', 'toc-' + i);
        }
    })
});

function isActive(node) {
    const i = headers.indexOf(node);
    const next = headers[i + 1];
    const sectionTop = node.offsetTop;
    const sectionBottom = !!next ? next.offsetTop : bottom;
    if (sectionTop > bottom) {
        // not yet scrolled that far
        return false;
    }

    if (sectionBottom < top) {
        return false;
    }

    if (sectionTop <= bottom) {
        // still on screen
        return true;
    }
    
    if (!!next && next.offsetTop > top)
    {
        return false;
    }
    
    return true;
}

function getText(header) {
    const text = header.innerText;
    const i = text.indexOf('\n')
    if (i !== -1) {
        return text.substr(0, i);
    }
    return text;
}

function scrollTo(header) {
    window.scroll({
        top: header.offsetTop,
        behavior: 'smooth'
    });
}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
}

.content {
    flex: 3;
}

aside {
    flex: 1;
    border-left: 1px solid var(--color-box-border);
}

ul {
    position: fixed;
    list-style: none;
    padding: 0;
}

li {
    margin: 0;
}

a {
    display: block;
    padding: var(--padding-small) var(--padding-medium);
    text-decoration: none;
    font-size: var(--font-size-small);
    color: var(--color-dark);
    border-left: 2px solid transparent;
    opacity: 0.7;
    transition: all 0.25s ease-out;
}

a:hover {
    color: var(--color-dark);
    border-color: var(--color-box-border);
    opacity: 1;
}

a.active {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

a :global(figure) {
    display: block;
    float: right;
    opacity: 0.7;
}

a :global(figure svg) {
    width: 1em;
    height: 1em;
}


a:hover :global(figure svg path) {
    fill: var(--color-success);
}

a.active :global(figure svg path) {
    fill: var(--color-primary);
}

@media (max-width: 1280px) {
    aside {
        display: none;
    }
}
</style>

<svelte:window bind:scrollY={top} bind:innerHeight={height} />

<section class="container">
    <section class="content" use:slotDom>
        <slot></slot>
    </section>

    <aside>
        <ul>

            {#each headers as header, i}
            <li>
                <a 
                    class:active={isActive(header)} 
                    on:click|preventDefault="{scrollTo(header)}" 
                    href="#{header.getAttribute('id')}">
                    {#if i > 0}
                    {getText(header)}
                    {:else}
                    <Icon name="arrow-collapse-up" /> Return to top
                    {/if}
                </a>
            </li>
            {/each}
        </ul>
    </aside>
</section>