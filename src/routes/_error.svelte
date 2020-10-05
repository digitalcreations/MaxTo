<script>
	import Icon from 'mdi-svelte';
	import { mdiArrowRight } from '@mdi/js';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
article {
	background: var(--color-primary);
	display: flex;
	align-items: center;
	min-height: 100vh;
}

h1, div {
	flex: 1;
}

h1 { 
	color: white; 
	text-align: center;
	font-size: 12rem;
	font-weight: 600;
}

h2 {
	color: white;
	line-height: 1em;
	margin-bottom: 0;
}

p {
	color: rgba(255, 255, 255, 0.5);
}

a {
	color: rgba(255, 255, 255, 0.7);
}

a.next {
    cursor: pointer;
	text-decoration: none;
	text-transform: uppercase;
	font-size: var(--font-size-small);
	font-weight: 600;
	letter-spacing: 0.05em;
}

a.next :global(figure) {
    transition: transform 0.25s ease-out;
}

a.next:hover :global(figure)
{
    transform: translateX(0.5rem);
}

a.next :global(figure) {
    display: inline-block;
}
a.next :global(figure path) {
    fill: rgba(255, 255, 255, 0.7);
}
</style>

<svelte:head>
	<title>{status} {error.message}</title>
</svelte:head>

<article>
	<h1>{status}</h1>
	<div>
		<h2>{error.message}</h2>
		<p>Please let us know that this page is missing by <a href="https://github.com/digitalcreations/MaxTo">filing an issue on our issue tracker</a>.</p>
		<p><a class="next" href="/">Homepage <Icon path={mdiArrowRight} /></a></p>
	</div>
</article>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
