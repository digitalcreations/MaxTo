<style>
section {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    margin: 0 calc(-1 * var(--padding-small));
}

section > :global(*) {
    margin: 0 var(--padding-small) var(--padding-medium);
}
</style>

<section>
    <slot></slot>
</section>