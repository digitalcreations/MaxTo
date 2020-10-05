<script>
  import { Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys } from "../../components.js";
  import { mdiFlash, mdiConsole, mdiCogs  } from '@mdi/js';
</script>

<svelte:head>
  <title>MaxTo reference manual</title>
</svelte:head>

<h1>In the <b>reference manual</b> we dive deeper into the individual parts of MaxTo, and let you know how they work.</h1>

<p>We've divided MaxTo's documentation into 3 separate sections, which you can navigate to quickly below.</p>

<SectionList>
    <SectionCard href="/reference/triggers" title="Triggers" text="Triggers are used to start recipes when things happen." icon={mdiFlash}></SectionCard>
    <SectionCard href="/reference/commands" title="Commands" text="They can be used on the command line or recipes to do different tasks." icon={mdiConsole}></SectionCard>
    <SectionCard href="/reference/settings" title="Settings" text="Which settings can you change, and what do they affect?" icon={mdiCogs}></SectionCard>
</SectionList>