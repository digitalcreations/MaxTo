<style>
section {
    background: white;
    border: 1px solid var(--color-box-border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    padding: var(--padding-large);
}
.badge {
    position: absolute;
    top: 20px;
    right: -20px;
}

/* tabs in cards */
article > :global(.tabs:first-child) {
    margin: calc(-1 * var(--padding-large));
}
article > :global(.tabs:first-child nav) {
    background: rgba(0,0,0,0.025)
}
article > :global(.tabs:first-child nav button),
article > :global(.tabs:first-child .content) {
    padding: var(--padding-medium);
}
</style>

<section class="card">
    <aside class="badge"><slot name="badge" /></aside>
    <article><slot /></article>
</section>