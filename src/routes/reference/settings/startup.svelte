<script>
import Card from '$lib/components/Card.svelte';
import Alert from '$lib/components/Alert.svelte';
import Link from '$lib/components/Link.svelte';
import SettingsExample from '$lib/components/SettingsExample.svelte';
</script>

<svelte:head>
    <title>Startup settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>You can control whether MaxTo starts when you sign in, and if it should require administrative rights.</h1>

<SettingsExample 
    name="startup"
    alt="Startup settings in the MaxTo user interface"
    config={{ "startup": { "startOnLogon": true, "runElevated": false } }}>
</SettingsExample>

<h2>Start with Windows</h2>

<p>
    This is the simplest option here, and controls if MaxTo will start whenever you sign in to Windows.
    If you use MaxTo regularly, and want it to always be available, we recommend leaving this on.
</p>

<p>
    This settings is turned on by default.
</p>

<h2>Elevation</h2>

<Card>
    <h3>What is elevation?</h3>
    
    <p>
        <Link href="https://en.wikipedia.org/wiki/User_Account_Control">User account control</Link> (UAC) is a security feature that was introduced in Windows Vista. When UAC is turned on, user accounts run most programs with restricted permissions.
    </p>
    <p>
        Some programs require administrative permissions, usually because they were made before UAC was introduced or if they access system-wide features, and when a program asks for these elevated permissions, the UAC elevation dialog appears.
    </p>
</Card>

<p>
    When you install MaxTo, it will by default set itself up to run as a normal user. If you have UAC enabled on your machine,
    that means it will not have permission to interact with processes that are running elevated, and MaxTo features will not
    work for those specific programs.
</p>

<p>
    If you want MaxTo to be able to work with software that is running elevated, MaxTo itself needs to be running elevated. 
    Enabling elevation on MaxTo will open the UAC prompt, and you need to accept that prompt for MaxTo to gain those permissions.
    Note that if you set MaxTo to run elevated here, it will prompt you for elevated permissions whenever you start it manually
    (but if you have <b>Start with Windows</b> turned on, it will keep the permissions across reboots).
</p>

<Alert kind=danger>
    <h3>Important note</h3>
    <p>
        Please note that any program which runs elevated has access to everything on your machine.
        You should not run MaxTo elevated unless you understand everything on this page, and 
        want MaxTo to work with other software that runs elevated.
    </p>
    
    <p>
        Consider yourself warned.
    </p>
</Alert>