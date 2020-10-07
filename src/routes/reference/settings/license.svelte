<script>
import { Card, Keys, Code, CommandExample, Alert, Link, Tabs, Tab, SettingsExample, Accordion, AccordionItem } from '../../../components.js';
import { mdiFile, mdiFolder } from '@mdi/js';
</script>

<svelte:head>
    <title>License settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>The license is boring, but necessary.</h1>

<p>
Your license key for MaxTo looks like a long word of seemingly random characters. It is in fact so long that
you are not meant to ever type it in yourself.
</p>

<SettingsExample 
    name="license"
    alt="License settings in the MaxTo user interface. The Validate button lights up when you have typed a valid license key.">
    <Tab title="license.txt">
        <p>MaxTo will look for your license key in a file called <Code icon={mdiFile}>license.txt</Code>, found in <Code icon={mdiFolder}>%AppData%\MaxTo</Code>.</p>
        <p>Simply placing the license key in that file will make MaxTo check the license code when it starts.</p>
    </Tab>
</SettingsExample>

<p>
Your license key is available to you in 3 places:
</p>
<ul>
<li><p>Immediately after your purchase, next to your receipt.</p></li>
<li><p>In a separate e-mail sent to you immediately after purchase from <q>support@maxto.net</q>.</p></li>
<li><p>By <a href="https://maxto.net/account/login">logging in</a> on our website with the e-mail you used when you purchased.</p></li>
</ul>
<p>
Copy your license key and enter it into this field. MaxTo will decode and save it for you.
</p>
<p>
If you have internet connectivity, MaxTo will go online and verify your license. The license keys are
cryptographically signed, so they also work without internet access.
</p>

<Alert kind=info>
<h3>Legacy license keys</h3>
<p>
Do you have a license key consisting of two parts, <b>Registered to</b> and <b>Product key</b>?
In that case you will need to upgrade your legacy license key (which will still be valid for version
2017.07 and older) for a new one.
</p>
<p>
Upgrading your license key to the new format is free.
</p>
<p>
<Link href="https://maxto.net/license/exchange">Upgrade license key</Link>
</p>
</Alert>
