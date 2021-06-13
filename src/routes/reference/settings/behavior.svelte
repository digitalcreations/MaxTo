<script>
import Keys from '$lib/components/Keys.svelte';
import CommandExample from '$lib/components/CommandExample.svelte';
import SettingsExample from '$lib/components/SettingsExample.svelte';
</script>

<svelte:head>
    <title>Window behavior settings &mdash; MaxTo reference manual</title>
</svelte:head>

<h1>The <b>window behavior</b> settings lets you control how windows behave.</h1>

<p>
    These settings control what happens when you drag and maximize windows.
</p>

<SettingsExample 
    name="behavior"
    alt="Behavior settings in the MaxTo user interface"
    config={{ "behavior": {
    "snap": {
      "to": [
        "Screen",
        "Window"
      ],
      "distance": 10
    },
    "transparentWindowsWhenMoving": true,
    "passiveMode": false
  } }}>
</SettingsExample>

<h2>Window transparency</h2>

<p>
    When this setting is on, windows will become partially transparent when you move or resize them. This makes it
    possible to see what is behind them. Window transparency is turned on by default, but if you do not like 
    this feature you can turn it off here.
</p>

<p>
    Changing this setting takes effect immediately.
</p>

<CommandExample category="settings" name="set" parameters={{ "Setting": "behavior.transparentWindowsWhenMoving", "On": null }} 
    title="Turn window transparency on" />

<h2>Passive mode</h2>

<p>
    By default, MaxTo will detect any time you maximize a window, and force that window into a region. If you hold <Keys combination="Shift" />,
    MaxTo will let that window maximize normally. 
</p>

<p>
    If you turn on <em>Passive mode</em>, this behavior is reversed: when you maximize a window it will go to the entire monitor. Holding <Keys combination="Shift" />
    will instead maximize the window to a region.
</p>

<CommandExample category="settings" name="set" parameters={{ "Setting": "behavior.passiveMode", "Toggle": null }}
   title="Toggle passive mode"
   description="When you run this command, it will toggle the passive mode setting.">
</CommandExample>

<h2>Window snapping</h2>

<p>
    MaxTo can snap windows together when you move or resize them, as if they were magnetic. These options let you decide which "things" MaxTo consider magnetic;
    and how close together they have to be for MaxTo to snap.
</p>

<p>
    <b>Snap to window edges</b> allows you to snap to the edges of any visible windows. Edges that are behind other windows will not be counted, and the edge has to partially overlap
    with the edge that is moving on the opposite axis.
</p>

<p>
    <b>Snap to region edges</b> (off by default) allows you to snap to where the regions end. These lines are not visible when you are moving windows around, which is why this is disabled by default.
</p>

<p>
    <b>Snap to monitor edges</b> allows you to snap to the edges of your monitors (really the working area of those monitors).
</p>

<p>
    The <b>snap distance</b> (default 10px) controls how far away a window can be before it snaps.
</p>