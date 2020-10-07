<script>
  import { Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, LinkList, LinkListItem, SegoeIcon, Tabs, Tab, Keys } from "../../../components.js";
</script>

<style>
    .list-item {
        display: inline-block;
        vertical-align: middle;
    }
    
    .list-item h4, .list-item p {
        margin: 0;
    }
</style>

<svelte:head>
  <title>Settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>MaxTo has a lot of settings, that can completely change how it works.</h1>

<p>
    To get to the settings, you can right-click MaxTo's icon in the notification area and choose <em>Settings</em>, or press
    <Keys combination="Windows+Control+T" /> to open it quickly.
</p>

<p>
    The settings are divided into multiple categories, depending on what they affect.
</p>

<LinkList>
    <LinkListItem href="/reference/settings/recipes">
        <SegoeIcon icon=61667></SegoeIcon>
        <section class="list-item">
            <h4>Recipes</h4>
            <p>Create your own or modify existing recipes to work the way you want.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/behavior">
        <SegoeIcon icon=59552></SegoeIcon>
         <section class="list-item">
            <h4>Window behavior</h4>
            <p>Toggle window transparency when dragging, passive mode and window snapping.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/monitor">
        <SegoeIcon icon=59380></SegoeIcon>
        <section class="list-item">
            <h4>Monitor</h4>
            <p>Change how MaxTo identifies monitors, and toggle virtual desktop support.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/compatibility">
        <SegoeIcon icon=60050></SegoeIcon>
         <section class="list-item">
            <h4>Compatibility</h4>
            <p>View, update or toggle compatibility shims that make MaxTo work with different programs.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/language">
        <SegoeIcon icon=59329></SegoeIcon>
         <section class="list-item">
            <h4>Language</h4>
            <p>Change the language MaxTo talks.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/updates">
        <SegoeIcon icon=59180></SegoeIcon>
         <section class="list-item">
            <h4>Updates</h4>
            <p>Toggle automatic updates, and change the stability of desired releases.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/startup">
        <SegoeIcon icon=59375></SegoeIcon>
         <section class="list-item">
            <h4>Startup</h4>
            <p>Let MaxTo start with Windows, and toggle elevation support.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/error-reporting">
        <SegoeIcon icon=59322></SegoeIcon>
         <section class="list-item">
            <h4>Error reporting</h4>
            <p>Change how (and if) MaxTO reports errors to the developers.</p>
        </section>
    </LinkListItem>
    
    <LinkListItem href="/reference/settings/license">
        <SegoeIcon icon=59182></SegoeIcon>
         <section class="list-item">
            <h4>License</h4>
            <p>Input or change your license.</p>
        </section>
    </LinkListItem>
</LinkList>

<h2>Advanced topics</h2>

<p>
    You can <Link href="/reference/settings/location">change the location of your configuration</Link>, for instance if you want to 
    run MaxTo as a portable program.
</p>