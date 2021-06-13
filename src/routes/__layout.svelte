<script context="module">
	import version from '$lib/version.js';
	import commands from '$lib/commands.js';
	import triggers from '$lib/triggers.js';

	export async function load({ fetch }) {
		async function getJson(url) {
			const res = await fetch(url);
			const { en } = await res.json();
			return en;
		}
		
		return { props: { triggers, commands } };
	}
</script>

<script>
import ArticleSummary from '$lib/components/ArticleSummary.svelte';
import SplitView from '$lib/components/SplitView.svelte';
import TableOfContents from '$lib/components/TableOfContents.svelte';
import Badge from '$lib/components/Badge.svelte';
import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
import contents from '$lib/contents.js';

export let segment;
export let commands;
export let triggers;

export let categories = {
	trigger: [
		{ name: "window", title: "Window" },
		{ name: "windows", title: "Windows" },
		{ name: "maxto", title: "MaxTo" },
		{ name: "virtualdesktop", title: "Virtual desktop" },
		{ name: "monitor", title: "Monitor" },
		{ name: "network", title: "Network" },
		{ name: "keyboard", title: "Keyboard" },
	],
	command: [
		{ name: "window", title: "Window" },
		{ name: "ui", title: "UI" },
		{ name: "mouse", title: "Mouse" },
		{ name: "regions", title: "Regions" },
		{ name: "license", title: "License" },
		{ name: "settings", title: "Settings" }
	]
}

function filterCategory(triggers, category) {
    return Object.keys(triggers)
        .filter(k => k.startsWith(category + ":"))
        .map(k => map(k, triggers[k]))
}

function map(name, triggerOrCommand) {
    return {
        category: name.substr(0, name.indexOf(':')),
        name: name.substr(name.indexOf(':') + 1),
        ...triggerOrCommand
    };
}

function mapToTableOfContents(triggerOrCommand, what) {
    return categories[what]
        .map(category => ({
            href: `/reference/${what}s/${category.name}`,
            ...category,
            children: filterCategory(triggerOrCommand, category.name)
                .map(command => ({
                    href: `/reference/${what}s/${category.name}/${command.name}`,
                    title: `${command.category}:${command.name} — ${command.displayName}`
                }))
		}));
}

const reference = contents
	.find(c => c.href == "/reference");

reference.children.find(c => c.href == "/reference/triggers").children = mapToTableOfContents(triggers, 'trigger');
reference.children.find(c => c.href == "/reference/commands").children = mapToTableOfContents(commands, 'command');
</script>

<style>
	.logo {
		padding: var(--padding-large);
		display: flex;
		align-items: center;
		text-decoration: none;
		color: black;
	}

	.logo img {
		width: 2rem;
		height: 2rem;
	}

	.logo span {
		font-size: 1.5rem;
		line-height: 2rem;
		height: 2rem;
		font-weight: 200;
		margin: 0 var(--padding-medium);
	}

	article {
		padding: var(--padding-huge);
		max-width: 56em;
		margin: 0 auto;
	}

	.breadcrumbs {
		flex: 1;
		border-bottom: 1px solid var(--color-box-border);
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	
	.breadcrumbs :first-child() {
		flex: 1;
	}

@media (min-width: 992px) {
	.breadcrumbs {
		background: transparent;
	}
}

footer {
	background: #262f36;
	padding: var(--padding-large);
}

@media (min-width: 769px) {
	footer {
		display: flex;
		padding: 100px calc(3* var(--padding-large));
	}	
}

footer section:first-child {
	flex: 3;
}

footer section { flex: 1; }

footer h1, footer a {
	color: white;
}

footer a {
	text-decoration: none;
	font-weight: 300;
}

footer a:hover {
	text-decoration: underline;
}

footer h1 {
	font-size: var(--font-size-small);
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	margin-bottom: 5px;
}

footer p {
	color: rgba(255, 255, 255, 0.7);
	font-weight: 300;
	font-size: 15px;
	margin-top: 0;
}

footer img {
	width: 48px;
	height: 48px;
}

footer ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

footer li {
	margin: 0;
	font-size: 15px;
}

a.button {
	text-decoration: none;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	border: 1px solid transparent;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	color: #fff;
	background-color: var(--color-primary);
	border-color: var(--color-primary-border);
	padding: 0.625rem 1.25rem;
	font-size: 0.875rem;
	line-height: 1.5;
	border-radius: 10rem;
}

a.button:hover {
	background: hsl(var(--color-primary-hue), var(--color-primary-sat), calc(0.9 * var(--color-primary-lit)));
}

@media (max-width: 768px) {
    a.button {
		display: none;
	}
	
	article {
		padding: var(--padding-medium);
	}
}
</style>

<GoogleAnalytics properties={ ["G-XPPQYFYH15"] } />

{#if typeof segment == "object"}
<slot></slot>
{:else}
<SplitView>
	<a slot="header" class="logo" href="/">
		<img src="/logo.svg" alt="MaxTo logo" />
		<span>MaxTo</span> 
		<Badge text="{version}" color="success" />
	</a>
	
	<div slot="menu"><TableOfContents {contents} /></div>
	
	<main>
		<nav class="breadcrumbs">
			<Breadcrumbs {contents} />
			
			<a class="button" href="https://maxto.net">Visit website</a>
		</nav>

		<ArticleSummary>
			<article><slot></slot></article>
		</ArticleSummary>
	</main>
</SplitView>

<footer>
	<section>
		<h1>About</h1>
		<p>Made by humans in Norway.</p>
		<a href="https://www.digitalcreations.no" title="Digital Creations AS"><img src="/dc.svg" alt="Digital Creations logo" /></a>
	</section>
	
	<section>
		<h1>Product</h1>
		<ul>
			<li><a href="https://maxto.net/testimonials">Testimonials</a></li>
		</ul>
	</section>
	
	<section>
		<h1>Docs</h1>
		<ul>
			{#each contents as page}
			<li><a href={page.href}>{page.title}</a></li>
			{/each}
		</ul>
	</section>
	
	<section>
		<h1>Legal</h1>
		<ul>
			<li><a href="https://maxto.net/terms/purchase">Purchase terms</a></li>
			<li><a href="https://maxto.net/terms/privacy">Privacy</a></li>
			<li><a href="https://maxto.net/terms/license">License</a></li>
			<li><a href="https://maxto.net/resellers">For resellers</a></li>
		</ul>
	</section>
</footer>
{/if}