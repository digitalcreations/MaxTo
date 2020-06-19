<script context="module">
    import * as commands from '../commands.js';
    export const preload = commands.preload;
</script>

<script>
import { SplitView, TableOfContents, Badge, Breadcrumbs } from '../components.js';
import { mapToTableOfContents } from '../commands.js';

export let commands;

const contents = [
	{
		title: "Tutorial",
		href: "/tutorial",
		children: [
			{
				title: "What are regions?",
				href: "/tutorial/regions",
			},
			{
				title: "Keyboard shortcuts",
				href: "/tutorial/keyboard",
			},
			{
				title: "Command line",
				href: "/tutorial/cli"
			},
			{
				title: "Virtual desktops",
				href: "/tutorial/virtual_desktops"
			}
		]
	},
	{
		title: "How-to",
		href: "/how-to",
		children: [
			{
				title: "Joining multiple monitors",
				href: "/how-to/join-multiple-monitors"
			},
			{
				title: "Launching a web browser",
				href: "/how-to/launch-web-browser"
			},
			{
				title: "Locate a specific window",
				href: "/how-to/locate-window"
			},
			{
				title: "Lock window in place",
				href: "/how-to/lock-window"
			}
		]
	},
	{
		title: 'Reference manual',
		href: '/reference',
		children: [
			{
				title: 'Triggers',
				href: '/reference/triggers',
				children: [

				]
			},
			{
				title: 'Commands',
				href: '/reference/commands',
				children: mapToTableOfContents(commands)
			},
			{
				title: 'Settings',
				href: '/reference/settings',
				children: [
					
				]
			}
		]
	}
];
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

		<article><slot></slot></article>
	</main>
</SplitView>
<!-- 
<section class="outer">
	<nav>
		<a class="logo" href="/">
			<img src="logo.svg" alt="MaxTo logo" />
			<span>MaxTo</span> 
			<Badge text="2.1.0" color="success" />
		</a>

		<TableOfContents {contents} />
	</nav>

	<main>
		<nav class="breadcrumbs">
			<Breadcrumbs {contents} />
		</nav>

		<article><slot></slot></article>
	</main>
</section> -->