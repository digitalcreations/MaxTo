<script>
import { onMount } from 'svelte';

export let name;
export let set;
export let size = 'normal';
export let inline = false;

let svg = '';

onMount(async() => {
    const promise = await fetch(`icon/${set}/${name}.svg`);
    svg = await promise.text();
})
</script>

<style>
figure {
    margin: 0;
}

figure.inline {
    display: inline-block;
}

figure :global(svg) {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
}

figure :global(svg *) {
    fill: black;
}

figure.size-medium :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
}

figure.size-large :global(svg) {
    width: 2rem;
    height: 2rem;
}

figure.size-huge :global(svg) {
    width: 4rem;
    height: 4rem;
}

figure.size-giant :global(svg) {
    width: 10rem;
    height: 10rem;
}
</style>

<figure 
    aria-label="Icon {name}"
    class:inline
    class:size-normal={size == 'normal'}
    class:size-medium={size == 'medium'}
    class:size-large={size == 'large'}
    class:size-huge={size == 'huge'}
    class:size-giant={size == 'giant'}
>{@html svg}</figure>