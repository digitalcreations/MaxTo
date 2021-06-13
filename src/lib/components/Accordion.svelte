<script context="module">
  export const ACCORDION = {};
</script>

<script>
import { setContext } from 'svelte';

export let items = [];
export let collapsible = true;

setContext(ACCORDION, {
    collapsible: collapsible,
    add: function(i) { items = [...items, i]; return items.length - 1; },
    setOpen: function(item, visible) {
        items.forEach((setter, index) => setter(index == item && visible));
    }
});
</script>

<style>
section {
    border: 1px solid var(--color-box-border);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    width: 100%;
    background: white;
}
</style>

<section>
    <slot />
</section>