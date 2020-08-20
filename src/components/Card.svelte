<script>
export let type = "default";
export let padding = true;
export let title = null;
</script>

<style>
section {
    background: white;
    border: 1px solid var(--color-box-border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    position: relative;
    margin-bottom: var(--padding-large);    
}

section.padding {
    padding: var(--padding-large);
}

section.stacked::after {
    z-index: -1;
    display: block;
    content: '';
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    top: 1rem;
    bottom: -0.5rem;
    background: white;
    border: 1px solid var(--color-box-border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.25s ease-out;
}
section.stacked:hover::after {
    transform: translateY(0.25rem);
}

.badge {
    position: absolute;
    top: 20px;
    right: -20px;
}

header h3 { margin: 0; padding: var(--padding-large); padding-bottom: 0; }

/* tabs in cards */
header, article > :global(.tabs) {
    background: rgba(0,0,0,0.025)
}
article > :global(.tabs) {
    padding: 0 var(--padding-large);
}
article > :global(.tabs nav button),
article > :global(.tabs .content) {
    padding: var(--padding-medium);
}
</style>

<section class="card {type}" class:padding>
    {#if !!title}<header><h3>{title}</h3></header>{/if}
    <aside class="badge"><slot name="badge" /></aside>
    <article><slot /></article>
</section>