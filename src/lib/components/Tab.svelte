<script>
import { getContext } from 'svelte';
import { slide } from 'svelte/transition';
import { TABS } from '$lib/components/Tabs.svelte';

export let title = null;
export let icon = null;

const tab = {};
const { registerTab, selectTab, selectedTab } = getContext(TABS);

registerTab({ id: tab, title, icon });
</script>

{#if $selectedTab.id === tab}
<div class="content" animation:flip in:slide={{ key: tab, duration: 250 }} out:slide={{ key: tab, duration: 250 }}>
	<slot></slot>
</div>
{/if}