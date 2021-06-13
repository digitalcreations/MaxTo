<script>
import SettingsExample from '$lib/components/SettingsExample.svelte';
import Accordion from '$lib/components/Accordion.svelte';
import AccordionItem from '$lib/components/AccordionItem.svelte';
</script>

<svelte:head>
    <title>Update settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>If you install MaxTo using the installer, it can update itself whenever a new version is released.</h1>

<SettingsExample 
    name="updates"
    alt="Update setting in the MaxTo user interface"
    config={{ "updates": { "enabled": false, "channel": "Beta" } }}>
</SettingsExample>

<h2>Automatic updates</h2>

<p>
    You can disable automatic updates of MaxTo if you want to stay on the version you are running now, 
    in case we make changes in a future version that you do not like.
</p>

<p>
    We strongly recommend leaving automatic updates on, so you are automatically kept up to date
    with bug and security fixes.
</p>

<h2>Update channel</h2>

<p>
    Setting the update channel allows you to stay on the pulse of what is happening with MaxTo.
</p>

<Accordion collapsible={false}>
    <AccordionItem title="Stable">
        <p>You will only get releases that we consider to be stable, and we strive for these releases to have as few bugs as possible.</p>
    </AccordionItem>

    <AccordionItem title="Beta">
        <p>Releases in the beta channel are supposed to be feature-ready previews of what is coming, but may contain bugs.</p>
    </AccordionItem>

    <AccordionItem title="Alpha">
        <p>Releases in the alpha channel can be buggy, but you can get a head start on some features that may be essential to you.</p>
    </AccordionItem>
</Accordion>
