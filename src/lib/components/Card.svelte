<script>
export let type = "default";
export let padding = true;
export let title = null;
export let description = null;
export let scrollable = false;
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
    top: var(--padding-medium);
    right: calc(-1 * var(--padding-small));
}

header { margin: 0; padding: var(--padding-medium); padding-bottom: 0; }
header h3 { margin: 0; }
header :last-child { margin-bottom: 0; }

/* tabs in cards */
header, article > :global(.tabs nav) {
    background: rgba(0,0,0,0.025)
}
article > :global(.tabs nav) {
    padding: 0 var(--padding-medium);
}
article > :global(.tabs nav button),
article > :global(.tabs .content) {
    padding: var(--padding-medium);
}

.scrollable {
    overflow-x: scroll;
}

.scrollable article {
    width: min-content;
}

@media (max-width: 768px) {
    article > :global(.tabs nav button) {
        padding: var(--padding-small);
    }
}
</style>

<section class="card {type}" class:padding class:scrollable>
    {#if !!title}<header>
        <h3>{title}</h3>
        {#if !!description}<p>{description}</p>{/if}
    </header>{/if}
    <aside class="badge"><slot name="badge" /></aside>
    <article><slot /></article>
</section>