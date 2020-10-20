<script>
import Alert from './Alert.svelte';
import Accordion from './Accordion.svelte';
import AccordionItem from './AccordionItem.svelte';
import SegoeIcon from './SegoeIcon.svelte';

export let command;
$: commandArguments = Object.keys(command.arguments).map(k => ({ name: k, ...command.arguments[k] }));
</script>

<div style="float: right">
    <SegoeIcon icon={command.icon}></SegoeIcon>
</div>

<h1>{command.displayName}</h1>

<p>
{command.detailedDescription}
</p>

{#if !command.isRecipeCapable}
<Alert kind=info>
    <h2>Cannot be used in recipes</h2>
    <p>This command cannot be used in recipes, but it is available from the command line.</p>
</Alert>
{/if}

<h2>Arguments</h2>

{#if commandArguments.length > 0}
<Accordion collapsible={false}>
    {#each commandArguments as argument}
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
  This command does not accept arguments.
</p>
{/if}