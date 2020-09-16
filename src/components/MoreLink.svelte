<script>
export let href;
export let text = "Read more";
</script>

<style>
    a {
        color: var(--color-primary);
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.05em;
        font-size: var(--font-size-small);
        position: relative;
        padding-bottom: var(--padding-small);
        text-decoration: none;
    }
    a::after {
        content: '';
        position: absolute;
        display: block;
        background: var(--color-primary);
        height: 1px;
        width: 100%;
        left: 0;
        bottom: var(--padding-small);
        opacity: 0;
        transition: all 0.25s ease-in-out;
    }
    a:hover::after
    {
        opacity: 1;
        bottom: 0;
    }
</style>

<a {href}>{text}</a>