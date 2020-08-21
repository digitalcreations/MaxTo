<script>
import { Keys, CommandExample, Alert, Link } from '../../../components.js';
</script>

<svelte:head>
    <title>Compatibility settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>MaxTo's <b>compatibility shims</b> are used to prevent issues with other software on your system.</h1>

<p>
    Some software programs do not accept outside control that easily. Although all of the things MaxTo does
    is done through documented interfaces provided by Windows, everything from programming mistakes to 
    security-based decisions can cause programs to crash when faced with technology such as MaxTo.
</p>

<p>
    Our solution to those problems are compatibility shims. A compatibility shim is an instruction to MaxTo
    that if it sees program A running, it should not use feature B for that program. Compatibility shims always
    affect a single program (or software suite), and does not disable MaxTo features for all programs.
</p>

<p>
    For instance, <Link href="https://maxto.net/en/shim/winbox">MikroTik WinBox</Link> crashes when any program 
    attempts to subclass<a href="#fn-1"><sup>1</sup></a> their window. We assume this to be a bug in MikroTik WinBox
    or a library that they use when they make that software.
</p>

<p>
    MaxTo's compatibility shim therefore disables subclassing for any MikroTik WinBox windows. This means that
    window will lack all functionality that relies on subclassing: 
</p>

<ul>
    <li>Window snapping</li>
    <li>Window transparency when dragging</li>
    <li>Drag to maximize</li>
</ul>

<p>
    Compatibility shims vary in severity; some applications are completely ignored by MaxTo, while other shims
    only tell MaxTo that it has to do something in a specific way to avoid triggering an issue and no MaxTo 
    functionality is lost.
</p>

<p>
    Our website lists all the <Link href="https://maxto.net/shims">available compatibility shims</Link>. 
    These are the same as listed in the app.
</p>

<h2>Updating shims</h2>

<p>
    You can click the <b>Check for updates</b> button at any time, and MaxTo will go online and see if there
    are any updates to your shims. MaxTo will also check regularly for new shims in the background.
</p>

<p>
    Compatibility shims are updated outside of the regular MaxTo release cycle.
</p>

<h2>Disabling shims</h2>

<p>
    If you want to disable a compatibility shim, you can do that easily by clicking on it, and moving the 
    toggle switch to <b>Disabled</b>. The shim will be instantly disabled.
</p>

<p>
    Note that some shims cannot be disabled.
</p>

<p>
    <small>
        <sup id="fn1">1</sup> 
        <em>Subclassing</em> in the Win32 world is a method used to intercept and change the responses to window messages 
        received by that program, giving the subclassing program full control.
    </small>
</p>