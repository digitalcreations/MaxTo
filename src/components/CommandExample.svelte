<script>
import Code from './Code.svelte';
import Card from './Card.svelte';
import Tabs from './Tabs.svelte';
import Tab from './Tab.svelte';
import Link from './Link.svelte';

export let category;
export let name;
export let parameters;

$: mappedParameters = Object.keys(parameters)
    .map(k => ({ key: k, value: parameters[k] }));
$: json = JSON.stringify({ command: `${category}:${name}`, parameters }, null, 4);
</script>


<Card>
    <Tabs>
        <Tab title="Command line" icon="terminal">
            <slot></slot>

            <Code icon="terminal">maxto {category} {name} {#each mappedParameters as { key, value }}/{key} {#if !!value}"{value}" {/if}{/each}</Code>
            
            <p><small>You should be able to run this command on any system where MaxTo is installed, from either Command Prompt or Powershell. See <Link href="/tutorial/cli">the tutorial on using the command line</Link> for details.</small></p>
        </Tab>
        
        <Tab title="Part of a recipe" icon="list-ol">
            <pre>{json}</pre>
            
            <p><small>To learn where and how to use this, see <Link href="/reference/settings/recipes">the recipes section of the reference manual</Link>.</small></p>
        </Tab>
    </Tabs>
</Card>