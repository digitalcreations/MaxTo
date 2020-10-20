<script>
import { Keys, CommandExample, Alert, SettingsExample } from '../../../components.js';
</script>

<svelte:head>
    <title>Monitor settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>The <b>monitor</b> settings let you tell MaxTo what it should consider a monitor.</h1>

<p>
    MaxTo will apply regions to a monitor. In this case, each monitor has an identifier, and these settings determine how
    that identifier is created.
</p>

<SettingsExample 
    name="monitor"
    alt="Monitor settings in the MaxTo user interface"
    config={{     "monitor": {
    "idSelection": "SerialNumber",
    "virtualDesktop": true
  } }}
    explanation="This is the default configuration (as of version 2.1.0), which identifies monitors by their serial number and has new regions on each virtual desktop.">
</SettingsExample>

<Alert kind=warning>
    <h3>Where did my regions go?</h3>
    <p>
        When you change any of the monitor identification settings, MaxTo's monitor identifiers immediately updates,
        and it will suddenly see all new monitors, which by default have no regions set up.
    </p>
    <p>
        Changing your settings back, will restore the regions as they were before, so no data is really lost.
    </p>
</Alert>

<h2>Identify monitors by...</h2>

<p>
    This is how MaxTo constructs the main part of the monitor identifier. 
</p>

<p>
    If you choose <b>Number</b>, MaxTo will use the number the monitor is assigned by Windows.
    This number is likely to change, and be associated with another monitor if you connect or
    disconnect any monitors. If you never change your monitors (or roam your settings), this option 
    will work fine for you.
</p>

<p>
    If you choose <b>Properties</b>, MaxTo will use various properties of the monitor, such as its
    resolution, DPI scaling, which adapter the monitor is connected to. Changing either of these 
    properties will lead MaxTo to believe you've plugged in a new monitor and its regions will
    reset.
</p>

<p>
    If you choose <b>Serial number</b>, MaxTo will attempt to read the serial number from the monitor.
    The serial number is globally unique (in most cases, see note below), which means MaxTo will be
    able to detect the monitor no matter how it is connected or what settings it has. If the monitor
    does not report a serial number, MaxTo will fall back to using properties to identify that monitor.
</p>

<Alert kind=info>
    <h3>Why is this option even here?</h3>
    <p>
        In the old days, MaxTo only supported identifying monitors by their number. This has an obvious drawback,
        if you disconnect a low-numbered monitor, the other monitors get new numbers. Which means all the regions
        would move to another monitor. Not ideal.
    </p>
    <p>
        Starting in version 2.0, MaxTo introduced these options. We ideally wanted to identify monitors in a way
        that your regions "stuck" with the monitor, so you could unplug and replug whatever monitors you wanted,
        and MaxTo would always do the right thing. This also allows roaming your settings, so if you ran
        MaxTo on two computers, and moved a monitor from one computer to the other, the same regions would apply.
    </p>
    <p>
        The serial number is an ideal candidate for this. When implemented correctly (and believe it or not, some 
        monitors share serial numbers) this works quite well. Unless the monitor does not report its serial number
        to Windows. And that happens quite regularly.
    </p>
    <p>
        So our "midway" solution was added. By combining the properties of a monitor (e.g. its resolution, DPI,
        which card it is connected to, etc.) we were able to construct a semi-unique identifier. This is our fallback,
        either in cases where we cannot find the serial number, or when you want to use it.
    </p>
    <p>
        There are however situations where you do not want to identify monitors, but really want to just apply
        the same regions to any monitor you connect. This is why we left this an option.
    </p>
</Alert>

<h2>Virtual desktops</h2>

<p>
    MaxTo allows you to keep separate regions on each virtual desktop. The virtual desktop feature is only supported
    on Windows 10.
</p>

<p>
    Note that virtual desktop support defaults to on starting with version 2.1.0. In previous versions it defaulted
    to off, and if you upgraded to 2.1.0 from an earlier release, you will still have to turn on this feature manually.
</p>

<CommandExample category="settings" name="set" parameters={{ "Setting": "monitor.virtualDesktop", "On": null }}
   title="Separate regions on each virtual desktop"
   description="Run this command to enable separate regions on each virtual desktop.">
</CommandExample>