<script context="module">
function filterCategory(commands, category) {
    return Object.keys(commands)
        .filter(k => k.startsWith(category + ":"))
        .map(k => map(k, commands[k]))
}

function map(name, command) {
    return {
        category: name.substr(0, name.indexOf(':')),
        name: name.substr(name.indexOf(':') + 1),
        ...command
    };
}

export async function preload(page) {
    const { category } = page.params;
    const res = await this.fetch(`triggers.json`);
    const { en } = await res.json();
    return { category, triggers: filterCategory(en, category) };
}
</script>

<script>
  import { Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys, LinkList, LinkListItem, SegoeIcon } from "../../../../components.js";
  
  export let category;
  export let triggers;
</script>

<svelte:head>
  <title>MaxTo triggers reference</title>
</svelte:head>

<h1>These are the triggers in the <b>{category}</b> category.</h1>

<LinkList>
    {#each triggers as trigger}
    <LinkListItem href={`/reference/triggers/${trigger.category}/${trigger.name}`}>
        <SegoeIcon icon={trigger.icon}></SegoeIcon>
        {trigger.displayName} <small>{trigger.category}:{trigger.name}</small>
    </LinkListItem>
    {/each}
</LinkList>