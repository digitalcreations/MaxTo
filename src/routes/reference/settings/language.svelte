<script>
import Alert from '$lib/components/Alert.svelte';
import Link from '$lib/components/Link.svelte';
import SettingsExample from '$lib/components/SettingsExample.svelte';
</script>

<svelte:head>
    <title>Language settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>MaxTo allows you to change the language. This is where you do it.</h1>

<p>
    MaxTo will by default use the system language. You can change this here if you want to.
</p>

<SettingsExample 
    name="language"
    alt="Language settings in the MaxTo user interface"
    config={{ language: "no" }}>
</SettingsExample>

<Alert kind=info>
    <h3>Requires MaxTo restart</h3>
    <p>
        Please note that changing the language requires MaxTo to restart.
    </p>
</Alert>

<Alert kind=info>
    <h3>Not everything is translated</h3>
    <p>
        There are some parts of MaxTo that are not translated. 
    </p>
    
    <ul>
        <li>
        <p>
            <b>Log messages,</b> because logs are mostly useful for developers.
        </p>
        </li>
        <li>
        <p>
            <b>Command and trigger names and arguments,</b> because we want to keep recipes compatible between systems.
        </p>
        </li>
    </ul>
</Alert>

<h2>Get MaxTo in your language</h2>

<p>
    While MaxTo supports a variety of languages, and we pay for professional translation services for our most popular languages, 
    the best translations are usually provided by actual users. We therefore strongly recommend that if you want MaxTo in your
    language, you should <Link icon=flag href="https://maxto.net/translate">visit our translation pages</Link> to help us out.
</p>

