<script context="module">
	async function getJson(that, what) {
		const res = await that.fetch(what);
		const { en } = await res.json();
		return en;
	}

	export async function preload() {
		const [ triggers, commands ] = await Promise.all([
			getJson(this, 'triggers.json'),
			getJson(this, 'commands.json')
		]);
		
		return { triggers, commands };
	}
</script>

<script>
import { ArticleSummary, SplitView, TableOfContents, Badge, Breadcrumbs } from '../components.js';
import contents from '../contents.js';

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
	}

	.breadcrumbs {
		flex: 1;
		border-bottom: 1px solid var(--color-box-border);
		background: white;
	}

@media (min-width: 992px) {
	.breadcrumbs {
		background: transparent;
	}
}
</style>

{#if typeof segment == "object"}
<slot></slot>
{:else}
<SplitView>
	<a slot="header" class="logo" href="/">
		<img src="logo.svg" alt="MaxTo logo" />
		<span>MaxTo</span> 
		<Badge text="2.1.0" color="success" />
	</a>
	
	<div slot="menu"><TableOfContents {contents} /></div>
	
	<main>
		<nav class="breadcrumbs">
			<Breadcrumbs {contents} />
		</nav>

		<ArticleSummary>
			<article><slot></slot></article>
		</ArticleSummary>
	</main>
</SplitView>
{/if}