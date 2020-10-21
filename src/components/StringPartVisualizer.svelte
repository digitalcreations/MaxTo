<script>
import Card from './Card.svelte';
import { responsiveTable } from "../actions/responsiveTable.js";

const modes =
{
    log: {
        regex: /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(\w+)@(\d+.\d+.\d+.\d+)\] \[(\w+)\] \[([\.\w]*)\] (.*)$/,
        descriptions: [
            { title: "Date and time", description: "When did this event occur?" },
            { title: "Executable", description: "Which MaxTo executable caused this line?" },
            { title: "Version", description: "The version number of MaxTo that is running. This is the file version, and does not correspond exactly to the published version numbers (meaning it won't contain any alpha or beta labels)." },
            { title: "Log level", description: "How severe is the event considered to be?" },
            { title: "Source", description: "Where in the source code did this event originate? Useful for the developers." },
            { title: "Message", description: "The text of the event, describing what actually happened." }
        ]
    },
    window: {
        regex: /^\\([^\\]*)\\([^\\]*)\\([^\\]*)$/,
        descriptions: [
            { title: "Process name", description: "The name of the process executable (without the .exe ending)." },
            { title: "Window class", description: "The window class of the window." },
            { title: "Window title", description: "The window title, as seen in the title bar or the taskbar."}
        ]
    }
}

const colors = [
    "var(--color-primary)",
    "var(--color-success)",
    "var(--color-warning)",
    "var(--color-danger)",
    "var(--color-default)",
    "var(--color-dark)",
]

export let line;
export let mode = "log";
export let showValuesInTable = false;
export let showTable = true;

$: regex = modes[mode].regex;
$: descriptions = modes[mode].descriptions;

$: parts = regex.exec(line || "")
    .slice(1) // skip complete match
    .map((m, i) => ({
        text: m,
        start: line.indexOf(m),
        width: m.length,
        ...descriptions[i],
        color: colors[i % colors.length]
    }));
</script>

<style>
section {
    width: min-content;
    position: relative;
    font-family: 'Consolas', 'Courier New', monospace;
    padding-bottom: 1.8rem;
}

.part
{
    --color: var(--color-dark);
    margin-top: -1rem;
    position: absolute;
    border-top: 3px solid var(--color);
}

span {
    font-family: var(--font-family);
    font-size: var(--font-size-small);
}

.dot 
{
    --color: var(--color-dark);
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background: var(--color);
}

table {
    margin-top: 1rem;
}
</style>

<Card scrollable>
<section>
    <pre class="text">{line}</pre>
    {#each parts as { text, start, width, title, color, description }}
    {#if width > 0}
        <div class="part" style="left: {start}ch; width: {width}ch; --color: {color}"><span>{title}</span>
        </div>
    {/if}
    {/each}
</section>
</Card>

{#if showTable}
<table use:responsiveTable>
    <thead>
    <tr>
    <th>Part</th>
    <th>Description</th>
    {#if showValuesInTable}
    <th>Value</th>
    {/if}
    </tr>
    </thead>
    
    <tbody>
    {#each parts as { text, title, color, description }}
        <tr>
        <td><span class="dot" style="--color: {color}"></span> {title}</td>
        <td>{description}</td>
        {#if showValuesInTable}
        <td>{text}</td>
        {/if}
        </tr>
    {/each}
    </tbody>
</table>
{/if}