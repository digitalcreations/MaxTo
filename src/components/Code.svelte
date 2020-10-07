<script>
import Icon from 'mdi-svelte';

export let icon = "console";
</script>

<style>
span {
    display: inline-flex;
    overflow: hidden;
    justify-items: stretch;
}

.code figure {
    padding: 0 0.5rem;
    display: inline-block;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    margin: 0;
}

.code figure, code {
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
    font-size: 0.875rem;
    line-height: 1.8rem;
	white-space: pre-wrap;
    padding: 0 0.5rem;
}
</style>

<span class="code">
    <figure><Icon path={icon} size="0.75rem" /></figure>
    <code><slot></slot></code>
</span>