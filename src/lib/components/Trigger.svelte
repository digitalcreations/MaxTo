<script>
import Accordion from '$lib/components/Accordion.svelte';
import AccordionItem from '$lib/components/AccordionItem.svelte';
import SegoeIcon from '$lib/components/SegoeIcon.svelte';

export let trigger;
$: triggerArguments = Object.keys(trigger.arguments).map(k => ({ name: k, ...trigger.arguments[k] }));
</script>

<div style="float: right">
    <SegoeIcon icon={trigger.icon}></SegoeIcon>
</div>

<h1>{trigger.displayName}</h1>

<p>
{trigger.detailedDescription}
</p>

<h2>Arguments</h2>

{#if triggerArguments.length > 0}
<Accordion collapsible={false}>
    {#each triggerArguments as argument}
    <AccordionItem>
        <p slot=title>
            <code>{argument.name}</code> &mdash; {argument.title}
        </p>
        {#if argument.description}
        <p style="white-space: pre-wrap">{@html argument.description}</p>
        {:else}
        <p>This argument has no further description.</p>
        {/if}
    </AccordionItem>
    {/each}
</Accordion>
{:else}
<p>
   This trigger does not accept arguments.
</p>
{/if}