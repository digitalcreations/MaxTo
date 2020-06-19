<script>
import { Command, CommandExample, Code } from '../../../../../components.js';
</script>

<h2>Moving a window directionally</h2>

<p>
    If you want to move a window in a direction, you will most likely need to specify the window and the direction you want to move the window.
</p>

<CommandExample category=window name=move parameters={{ window: "* - Notepad", direction: "Right" }} />

<h2>Swapping windows</h2>

<p>
  If you set the <Code>/Swap</Code> flag, and the window you are moving is currently in a region, MaxTo will check which windows are in the 
  destination region, and move all those windows into the region where the moving window came from.
</p>

<p>
  This is especially useful in situations where you have one larger region (call it your focus region), and multiple smaller regions. This makes it
  very quick to move a window into the focus region, and moving the window that is already there to a different region.
</p>