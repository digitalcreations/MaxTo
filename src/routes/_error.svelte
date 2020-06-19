<script>
	import { Alert } from '../components.js';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>


<svelte:head>
	<title>{status}</title>
</svelte:head>

<Alert kind=danger>
	<h2>{status} {error.message}</h2>

	<p>We are sorry about the inconvenience. Please let us know that this page is missing by <a href="https://github.com/digitalcreations/MaxTo">filing an issue on our issue tracker</a>.</p>
</Alert>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
