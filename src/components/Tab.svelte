<script>
import { getContext } from 'svelte';
import { slide } from 'svelte/transition';
import { flip } from 'svelte/animate';
import { TABS } from './Tabs.svelte';

export let title = null;
export let icon = null;
export let iconSet = 'light';

const tab = {};
const { registerTab, selectTab, selectedTab } = getContext(TABS);

registerTab({ id: tab, title, icon, iconSet });
</script>

{#if $selectedTab.id === tab}
<div class="content" animation:flip in:slide={{ key: tab, duration: 250 }} out:slide={{ key: tab, duration: 250 }}>
	<slot></slot>
</div>
{/if}