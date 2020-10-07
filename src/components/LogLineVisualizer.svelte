<script>
import Card from './Card.svelte';

export let line;
export let regex = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(\w+)@(\d+.\d+.\d+.\d+)\] \[(\w+)\] \[([\.\w]*)\] (.*)$/;
export let descriptions = [
    { title: "Date and time", color: "var(--color-primary)", description: "When did this event occur?" },
    { title: "Executable", color: "var(--color-success)", description: "Which MaxTo executable caused this line?" },
    { title: "Version", color: "var(--color-warning)", description: "The version number of MaxTo that is running. This is the file version, and does not correspond exactly to the published version numbers." },
    { title: "Log level", color: "var(--color-danger)", description: "How severe is the event considered to be?" },
    { title: "Source", color: "var(--color-default)" , description: "Where in the source code did this event originate? Useful for the developers." },
    { title: "Message", color: "var(--color-dark)", description: "The text of the event, describing what actually happened." }
];

$: parts = regex.exec(line || "")
    .slice(1) // skip complete match
    .map((m, i) => ({
        text: m,
        start: line.indexOf(m),
        width: m.length,
        ...descriptions[i]
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
</style>

<Card scrollable>
<section>
    <pre class="text">{line}</pre>
    {#each parts as { text, start, width, title, color, description }}
        <div class="part" style="left: {start}ch; width: {width}ch; --color: {color}"><span>{title}</span>
        </div>
    {/each}
</section>

<table>
    <thead>
    <tr>
    <th>Part</th>
    <th>description</th>
    </tr>
    </thead>
    
    <tbody>
    {#each parts as { text, title, color, description }}
        <tr>
        <td><span class="dot" style="--color: {color}"></span> {title}</td>
        <td>{description}</td>
        </tr>
    {/each}
    </tbody>
</table>
</Card>