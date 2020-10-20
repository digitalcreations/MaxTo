<script>
import { Keys, CommandExample, Alert, Code, CodeSegment, Card, StringPartVisualizer } from '../../../components.js';
import { mdiFile, mdiFolder } from '@mdi/js';

$: date = new Date().toISOString().replace(/-/g, '').substring(0, 8);
</script>

<svelte:head>
    <title>Log files &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>MaxTo's <b>log files</b> provide insights when something goes wrong.</h1>

<Alert kind=warning>
    <h2>Advanced topic</h2>
    <p>
        You would normally only need to look in the log files if something goes wrong or you are reporting an issue to us.
    </p>
</Alert>

<p>MaxTo produces quite a bit of log data when it is installed and running. These are the locations where you can expect to find useful information should you experience a crash or unexpected behavior.</p>

<h2>Runtime logs</h2>

<p>
This runtime logs contains entries about what MaxTo is doing at specific points in time, including any crashes that
MaxTo experience. You will find the files in <Code icon={mdiFolder}>%AppData%\MaxTo</Code>. In this folder you will
find files named something like <Code icon={mdiFile}>maxto{date}.log</Code> (representing today). Old log files are
automatically deleted.
</p>

<Alert kind=info>
    <h2>Note on file paths</h2>
    <p>You can see the file paths we specify contain special variables (such as <Code icon={mdiFolder}>%AppData%</Code>). These
    expand into full paths on your machine, but can be different from computer to computer.</p>
    <p>To quickly open the log file, hit <Keys combination="Windows+R" /> on your keyboard, and copy in the path to the file.
    Then press OK, and the file should open in your default text editor (usually Notepad).</p>
</Alert>
<p>
Each line in this file is timestamped; and the file can grow quite large. If you can reliably reproduce your
issue, it could be helpful to delete the log file before trying to reproduce the issue — that way there
will be less data for us to read when we try to figure out what is going on.
</p>
<p>Here is an excerpt from the log file:</p>

<CodeSegment>2020-10-05 07:51:10 [CommandLine@2.1.0.697] [Information] [] Logger setup (online logging: True, process #1656)
2020-10-05 07:51:10 [CommandLine@2.1.0.697] [Information] [MaxTo.Core.Settings.DefaultConfigurationLocation] Found no specified configuration location file, using default settings location "C:\Users\vegar\AppData\Roaming\MaxTo"
2020-10-05 07:51:21 [CommandLine@2.1.0.697] [Information] [] Logger setup (online logging: True, process #29972)
2020-10-05 07:51:21 [CommandLine@2.1.0.697] [Information] [MaxTo.Core.Settings.DefaultConfigurationLocation] Found no specified configuration location file, using default settings location "C:\Users\vegar\AppData\Roaming\MaxTo"
2020-10-05 07:51:22 [Core@2.1.0.697] [Information] [MaxTo.Core.RestartService] Restarting MaxTo with arguments "--waitforexit 284"
2020-10-05 07:51:22 [Server@2.1.0.697] [Information] [MaxTo.Server.ServerApplicationContext] Received exit message. Exiting in 250ms...
2020-10-05 07:51:22 [UserInterface@2.1.0.697] [Information] [] Deactivated "MaxTo.UI.ViewModels.NotificationIconViewModel". Closed: True</CodeSegment>

<p>Let us take a closer look at a single log line.</p>

<StringPartVisualizer line='2020-10-02 13:10:23 [CompanionX64@2.1.0.697] [Information] [MaxTo.Core.Settings.DefaultConfigurationLocation] Found no specified configuration location file, using default settings location "C:\Users\vegar\AppData\Roaming\MaxTo"' />

<p>Each line has a log level, which indicates the severity of what is being reported. The log levels are, in order
from least to most important:</p>

<table>
    <thead>
    <tr>
        <th>Level</th>
        <th>Description</th>
    </tr>
    </thead>
    
    <tbody>
    <tr>
        <td>Debug</td>
        <td>Trivial events that specify in intricate detail what is being done.</td>
    </tr>
    <tr>
        <td>Information</td>
        <td>Events that carry information about normal program behavior.</td>
    </tr>
    <tr>
        <td>Warning</td>
        <td>Events that may indicate that something is wrong; but may be trivial.</td>
    </tr>
    <tr>
        <td>Error</td>
        <td>Events that indicate that something couldn't be done in the way you wanted. You'll get feedback from the program when this happens.</td>
    </tr>
    <tr>
        <td>Fatal</td>
        <td>Events that the program couldn't recover from. You'll get a notification the next time you start MaxTo.</td>
    </tr>
    </tbody>
</table>

<p>
  You can change the log level, which affects only what goes in the log files. However, there is no user interface for 
  changing it, so you will have to manually edit the configuration file to do so.
</p>

<h2>Installation logs</h2>
<p>
If you use the normal installer, it generates a log file during installation in <Code icon={mdiFile}>%LocalAppData%\SquirrelTemp\SquirrelSetup.log</Code>.
</p>

<p>
    Look in this file if you are experiencing issues with the MaxTo installer.
</p>
<section class="note">
<p>Note that the installation log may also contain information about other programs on your machine; as other
program may use the same installer as MaxTo does.</p>
</section>