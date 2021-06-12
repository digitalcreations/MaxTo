<script>
    import Keys from '$lib/components/Keys.svelte';
    import Alert from '$lib/components/Alert.svelte';
    import Code from '$lib/components/Code.svelte';
    import { mdiFile, mdiCodeJson } from '@mdi/js';
</script>

<svelte:head>
    <title>Exporting and importing recipes - MaxTo tutorial</title>
</svelte:head>
<h1>If you are moving computers, or want to share a recipe with others, you may want to <b>export</b> your recipes.</h1>
<p>
    Your recipes are stored with your settings. There are specific situations where it is useful to be able
    to export and import your recipes.
</p>

<ul>
    <li><p>When you want to share it with others.</p></li>
    <li><p>When you want to copy your recipe to another machine.</p></li>
    <li><p>When you have upgraded MaxTo and want to reset to the default recipes, and you want to keep some good recipes.</p></li>
</ul>

<h2>Exporting a single recipe</h2>

<p>
    To export a recipe, open Settings <Keys combination="Windows+Control+T" />, and the Recipes tab should open by default.
    Find the recipe you want to export, and click it to edit.
</p>

<p>
    You'll see a button called <b>Export recipe</b>. Clicking the button will prompt you to save the recipe as a <Code icon={mdiFile}>.recipe.json</Code> file.
    That's it.
</p>

<h2>Exporting multiple recipes</h2>

<Alert kind=warning>
    <h2>Advanced topic</h2>
    <p>Admittedly, process to export multiple recipes is not as smooth as we want it to be, and there will be improvements in this area. You need basic knowledge of JSON files to do this successfully.</p>
</Alert>

<p>
    Your recipes are stored in <Code icon={mdiFile}>%AppData%\MaxTo\config.json</Code> (by default). You'll need to look for 
    the <Code icon={mdiCodeJson}>recipes</Code> property, which should be an array.
</p>

<p>
    From that array, copy each recipe object you want to export out into separate files with the <Code icon={mdiFile}>.recipe.json</Code> extension.
</p>

<h2>Importing recipes</h2>

<p>
    To import a recipe, you'll need the <Code icon={mdiFile}>.recipe.json</Code> that was exported previously.
    Open Settings <Keys combination="Windows+Control+T" />, and on the <b>Recipes</b> tab, click <b>Import recipe</b>.
    Locate the recipe file, and open it.
</p>

<p>
    You will need to press <b>Save changes</b> for the recipe to take effect (otherwise it will be discarded).
</p>