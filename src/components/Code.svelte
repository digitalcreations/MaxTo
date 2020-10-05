<script>
import Icon from './Icon.svelte';

export let icon = "console";
</script>

<style>
span {
    display: inline-flex;
    overflow: hidden;
    justify-items: stretch;
}

.code :global(figure) {
    padding: 0 0.5rem;
    display: inline-block;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}

.code :global(figure), code {
    background: rgba(0,0,0,.1);
}

code {
    display: inline-block;
	background:rgba(0,0,0,.1);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border: 0;
    margin: 0;
    margin-left: 1px;

	white-space: pre-wrap;
    padding: 0 0.5rem;
}
</style>

<span class="code">
    <Icon name={icon} />
    <code><slot></slot></code>
</span>