<script lang="ts">
import Tab from '$lib/components/Tab.svelte';
import Tabs from '$lib/components/Tabs.svelte';
import Card from '$lib/components/Card.svelte';

export let name;
export let alt;
export let config = null;
export let explanation = null;

$: configPart = JSON
    .stringify(config, null, 2)
    .replace(/"([^"\n]*?)"/mg, '"<span class="string">$1</span>"')
    .replace(/([{}:,[\]])/mg, '<span class="syntax">$1</span>')
    .replace(/(\d+(?:\.\d+)?|false|true)/img, '<span class="scalar">$1</span>');
</script>

<style>
    img {
        width: calc(100% + 2 * var(--padding-medium));
        margin: calc(-1 * var(--padding-medium));
        margin-bottom: calc(-1 * var(--padding-medium) - 6px);
    }
    
    pre {
        margin: 0 calc(-1 * var(--padding-medium));
        padding: 0 var(--padding-medium);
        color: var(--color-dark);
    }
    
    pre :global(.syntax) {
        color: var(--step-background-1);
    }
    
    pre :global(.string)
    {
        color: var(--color-primary);
    }
    
    pre :global(.scalar) {
        color: var(--color-warning);
    }
</style>

<Card padding={false}>
    <Tabs>
        <Tab title="User interface"><img src="/reference/settings/{name}.png" {alt} /></Tab>
        
        {#if config != null}
        <Tab title="config.json">
            <pre>{@html configPart}</pre>

            <p>
                <small><b>Important!</b> This configuration sample has been shortened to only show the parts relevant for this chapter.</small>
            </p>
            {#if !!explanation}<p>{explanation}</p>{/if}
        </Tab>
        {/if}
        
        <slot />
    </Tabs>
</Card>