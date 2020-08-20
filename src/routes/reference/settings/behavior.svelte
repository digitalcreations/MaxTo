<script>
import { Keys, CommandExample } from '../../../components.js';
</script>

<h1>The <b>window behavior</b> settings lets you control a few aspects of how windows behave.</h1>

<p>
    
</p>

<h2>Window transparency</h2>

<p>
    When this setting is on, windows will become partially transparent when you move or resize them. This makes it
    possible to see what is behind them. Window transparency is turned on by default, but if you do not like 
    this feature you can turn it off here.
</p>

<p>
    Changing this setting takes effect immediately.
</p>

<CommandExample category="settings" name="set" parameters={{ "Setting": "behavior.transparentWindowsWhenMoving", "On": null }} />

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
   title="Toggle passive mode">
</CommandExample>