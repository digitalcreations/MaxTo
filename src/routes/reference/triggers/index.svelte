<script>
  import { Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys } from "../../../components.js";
</script>

<svelte:head>
  <title>MaxTo triggers reference</title>
</svelte:head>

<h1><b>Triggers</b> are what causes a recipe to run in MaxTo.</h1>

<p>Triggers are the occasion when a recipe runs. Each trigger can be set up with a range of arguments, which you can think of as filters.</p>

<p>All of MaxTo's triggers are divided into categories.</p>

<SectionList>
    <SectionCard href="/reference/triggers/window" title="Window" text="Move, fit, expand, contract or generally change windows." icon="window-maximize" />
    <SectionCard href="/reference/triggers/windows" title="Windows" text="When you lock or unlock your desktop." icon="microsoft-windows" />
    <SectionCard href="/reference/triggers/maxto" title="MaxTo" text="Trigger when MaxTo starts." icon="ray-start-arrow" />
    <SectionCard href="/reference/triggers/virtualdesktop" title="Virtual desktops" text="When virtual desktops are created, deleted or changed." icon="grid" />
    <SectionCard href="/reference/triggers/monitor" title="Monitor" text="Connected, disconnected or changed." icon="monitor" />
    <SectionCard href="/reference/triggers/network" title="Network" text="Network changes." icon="access-point-network" />
    <SectionCard href="/reference/triggers/keyboard" title="Keyboard" text="Keyboard hotkeys are in here." icon="keyboard" />
</SectionList>