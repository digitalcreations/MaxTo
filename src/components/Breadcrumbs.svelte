<script>
import { onMount } from 'svelte';
import Icon from 'mdi-svelte';
import { mdiArrowLeft } from '@mdi/js';

import { stores } from '@sapper/app';
const { page } = stores();

export let contents = [];

let crumbs = [];

$: crumbs = createCrumbs($page.path);

function createCrumbs(path) {
    if (contents.length === 0) {
        return;
    }

    let crumbs = [{
        title: "Home",
        href: "/"
    }];

    let c = contents;
    let next = null;
    do {
        next = c.find(i => path.startsWith(i.href));
        if (next != null) {
            crumbs = [...crumbs, { title: next.title, href: next.href }];
            c = next.children;
        }
    }
    while (!!c && !!next);

    return crumbs;
}
</script>

<style>
section
{
    display: flex;
    padding: var(--padding-medium) var(--padding-huge);
    align-items: center;
}

ul {
    flex: 1;
    list-style: none;
    padding: 0 0 0 var(--padding-large);
}

li {
    text-transform: uppercase;
    display: inline-block;
}

li + li:before {
    content: '/';
    display: inline-block;
    margin: 0 var(--padding-small);
    color: #999999;
    font-size: var(--font-size-tiny);
}

li a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    letter-spacing: 0.6px;
    font-size: var(--font-size-tiny);
}

li:last-child a {
    color: #555555;
}

a.back {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid var(--color-box-border);
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    transition: all 0.25s ease-out;
}

a.back:hover {
    box-shadow: var(--box-shadow);
    border-color: #999999;
    background: white;
}
</style>

<section>
    <a href="/" class="back">
        <Icon path={mdiArrowLeft} />
    </a>

    <ul>
        {#each crumbs as { title, href, active }}
        <li><a {href} rel=prefetch>{title}</a></li>
        {/each}
    </ul>
</section>

