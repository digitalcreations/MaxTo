<script>
  import SectionList from '$lib/components/SectionList.svelte';
  import SectionCard from '$lib/components/SectionCard.svelte';
  import Link from '$lib/components/Link.svelte';
  import { mdiWindowMaximize, mdiMouse, mdiGrid, mdiKey, mdiCogs, mdiHelpCircleOutline } from '@mdi/js';
</script>

<svelte:head>
  <title>MaxTo commands reference</title>
</svelte:head>

<h1><b>Commands</b> are the actions of the MaxTo universe.</h1>

<p>You use commands mainly to make changes, e.g. move a window into a region, move the mouse cursor or loading regions. They can be run either from the <Link href="/tutorial/cli">command line</Link> or from <Link href="/tutorial/recipes">recipes</Link>.</p>

<p>All of MaxTo's commands are divided into categories. The categories are used to group similar commands together.</p>

<SectionList>
    <SectionCard href="/reference/commands/window" title="Window" text="Move, fit, expand, contract or generally change windows." icon={mdiWindowMaximize} />
    <SectionCard href="/reference/commands/mouse" title="Mouse" text="Move the mouse." icon={mdiMouse} />
    <SectionCard href="/reference/commands/ui" title="UI" text="Open or close MaxTo windows." icon={mdiWindowMaximize} />
    <SectionCard href="/reference/commands/regions" title="Regions" text="Apply regions." icon={mdiGrid} />
    <SectionCard href="/reference/commands/license" title="License" text="Apply, clear or check the status of your license." icon={mdiKey} />
    <SectionCard href="/reference/commands/settings" title="Settings" text="Change MaxTo settings." icon={mdiCogs} />
    <SectionCard href="/reference/commands/uncategorized" title="Uncategorized" text="There's just one thing in here." icon={mdiHelpCircleOutline} />
</SectionList>