<script>
import { Card, Keys, CommandExample, Alert, Link, Tabs, Tab, SettingsExample, Accordion, AccordionItem } from '../../../components.js';
</script>

<svelte:head>
    <title>Error reporting settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>Crashes in MaxTo do happen, even though we do everything we can to prevent it. The error reporting is how we do that.</h1>

<SettingsExample 
    name="error_reporting"
    alt="Error reporting settings in the MaxTo user interface"
    config={{ "errorReporting": { "anonymityLevel": "MachineIdentifier", "enabled": true, "logLevel": "Information" } }}>
</SettingsExample>

<h2>Disabling error reporting</h2>

<p>MaxTo's error reports contain as little information as necessary, but in some cases you may want to turn error reporting off.</p>

<CommandExample category="settings" name="set" parameters={{ "Setting": "errorReporting.enabled", "Off": null }} 
    title="Turn error reporting off" />
    
<p>
    If you turn off error reporting, errors will still be logged locally to your <Link href="/reference/logs">log files</Link>,
    in a bit less details. If you should encounter a bug, you would have to send your log files to us manually.
</p>

<h2>Anonymity level</h2>

<p>
    The crash reports do not contain personally identifiable information (outside of what we mention below), and is only shared with 
    Raygun (see their <Link href="https://raygun.com/privacy">privacy policy</Link>). We use the Raygun service to keep track of which 
    crashes to fix first, based on how many machines are experiencing an error.
</p>

<Accordion collapsible={false}>
    <AccordionItem title="Anonymous">
        <p>No identifying information is sent with error reports.</p>
    </AccordionItem>
    
    <AccordionItem title="Machine identifier (default)">
        <p>We generate a completely random identifier, and store it on your machine. If you experience an error twice, we will know that it happened on <b>a</b> machine twice, not on two separate computers.</p>
    </AccordionItem>
    
    <AccordionItem title="License">
        <p>We extract the license identifier from your license key (a number that only we know who belongs to), and we can contact you if we find a solution to your problem, or would like to follow up on the problem.</p>
    </AccordionItem>
</Accordion>

<h2>Log level</h2>

<p>
    There is currently no user interface for changing the log level, so you will have to do it by editing the configuration file.
</p>

<p>
    Supported log levels are:
</p>

<ul>
    <li>Verbose</li>
    <li>Debug</li>
    <li>Informational (default)</li>
    <li>Warning</li>
    <li>Error</li>
    <li>Fatal</li>
</ul>

<p>
    We recommend leaving the log level as it is unless you are reporting an issue and we ask you to send more details.
</p>