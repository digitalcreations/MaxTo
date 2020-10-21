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

@media (max-width: 768px) {
    section {
        margin-right: var(--padding-small);
    }
    
    section > :global(*) {
        min-width: 100%;
        margin: 0 var(--padding-small) var(--padding-small);
    }
}
</style>

<section>
    <slot></slot>
</section>