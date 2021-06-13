<script context="module">
	export const TABS = {};
</script>

<script>
	import { setContext, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
    import Icon from 'mdi-svelte';

    export let style = "tabs";

	const tabs = [];
	const selectedTab = writable(null);

    function selectTab(tab) {
		selectedTab.set(tab);
    }

	setContext(TABS, {
		registerTab: tab => {
			tabs.push(tab);
			selectedTab.update(current => current || tab);
			
			onDestroy(() => {
				const i = tabs.indexOf(tabs.find(t => t.id == tab));
				tabs.splice(i, 1);
				selectedTab.update(current => current === tab ? (tabs[i] || tabs[tabs.length - 1]).id : current);
			});
		},

		selectedTab
	});
</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
li {
    display: inline-block;
}
button {
    display: block;
    border: 0;
    padding: 0.5rem 1rem;
    font-family: var(--font-family);
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    color: #999999;
    border-radius: 0;
    outline: none;
    transition: all 0.25s ease-in-out;
}
button.selected {
    color: black;
}
button :global(figure) {
    display: inline-block;
    opacity: 0.7;
    margin-right: 0.5rem;
}

/* tabs */
nav {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}

nav.tabs {
    border-bottom: 1px solid var(--color-box-border);
    overflow-y: hidden;
}
nav.tabs ul {
    margin-bottom: -1px;
}
nav.tabs button {
    background: transparent;
    border-bottom: 2px solid transparent;
}
nav.tabs button.selected {
    border-bottom: 2px solid var(--color-primary);
}

/* pills */
nav.pills {
    width: max-content;
}

nav.pills ul {
    display: block;
    background: #e5e5e5;
    border-radius: var(--border-radius);
}

nav.pills li {
    padding: 2px;
}

nav.pills button {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: var(--border-radius);
}
nav.pills button.selected {
    background: white;
}

@media (max-width: 768px) {
    button {
        padding: 0.25em 0.5em;
    }
}
</style>

<div class="tabs">
    <nav class:tabs={style !== "pills"}
        class:pills={style === "pills"}>
        <ul>
        {#each tabs as tab}
        <li>
            <button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
                {#if !!tab.icon}<Icon path={tab.icon}></Icon>{/if}
                {tab.title}
            </button>
        </li>
        {/each}        
        </ul>
    </nav>

	<slot></slot>
</div>