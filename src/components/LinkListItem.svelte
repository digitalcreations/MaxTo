<script>
import Icon from 'mdi-svelte';

export let href;
</script>

<style>
a {
    display: flex;
    text-decoration: none;
    color: black;
    padding: var(--padding-large);
    transition: background 0.25s ease-out;
}

a:hover {
    background: rgba(0,0,0,0.025);
}

span {
    flex: 1;
    display: flex;
    align-items: center;
}
</style>

<a {href}>
    <span><slot></slot></span>

    <Icon name="arrow-right" />
</a>