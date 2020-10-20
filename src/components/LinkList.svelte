<script>
import Card from './Card.svelte';
</script>

<style>
section
{
    margin: calc(-1 * var(--padding-large));
}

section > :global(*) {
    border-bottom: 1px solid var(--color-box-border);
}
</style>

<Card>
    <section>
    <slot></slot>
    </section>
</Card>