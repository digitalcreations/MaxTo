<script>
import Alert from '$lib/components/Alert.svelte';
import Code from '$lib/components/Code.svelte';
import { mdiFile, mdiFolder } from '@mdi/js';
</script>

<svelte:head>
    <title>Settings location &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>MaxTo allows you to change where your configuration files are stored.</h1>

<Alert kind=warning>
    <h3>Advanced topic</h3>
    <p>
        This functionality is not exposed in the user interface, because it could be confusing to some users. It involves
        editing text files.
    </p>
</Alert>

<p>
On startup, MaxTo will look for a <Code icon={mdiFile}>config.location</Code> to determine where it will store its configuration. It will look for this file in the following folders, in this order, and use the first file it finds:
</p>

<ol>
    <li><p><Code icon={mdiFolder}>%AppData%\MaxTo</Code>.</p></li>
    <li><p>Next to the .exe file.</p></li>
    <li><p><Code icon={mdiFolder}>%LocalAppData%\MaxTo</Code> (which is where MaxTo is installed by default).</p></li>
</ol>

<p></p>

<p>
If MaxTo cannot find that file in any of those locations, it will use <Code icon={mdiFolder}>%AppData%\MaxTo</Code> as the default settings location.
</p>

<p>
Store your settings in Dropbox by putting <Code icon={mdiFolder}>%USERPROFILE%\Dropbox</Code> in your <Code icon={mdiFile}>config.location</Code> file.
</p>

<Alert kind="info">
<h3>Use folder paths</h3>
<p>
The <Code icon={mdiFile}>config.location</Code> file should be a text file and <b>only contain the path to the folder where MaxTo should store its settings</b>. 
This means you should not use the path to a file in that folder (e.g. <Code icon={mdiFile}>config.json</Code>).
You can use environment variables here, so <Code icon={mdiFolder}>%USERPROFILE%\Dropbox</Code> is perfectly valid.
</p>
</Alert>

<p>
Note that MaxTo's settings are designed to be roamed, and putting your configuration in a Dropbox, OneDrive or Nextcloud folder should work well.
</p>

<p>
If you want to use MaxTo as a portable application, you can enter only <Code icon={mdiFolder}>.\settings</Code> in this file, and MaxTo will store the configuration in the settings subdirectory next to the executable.
</p>