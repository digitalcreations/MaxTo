<script>
import { Badge, Keys, Link, Alert } from '../../components.js';
import { responsiveTable } from '../../actions/responsiveTable.js';
</script>

<style>
table:not(.bordered) td:first-child {
    min-width: 216px;
}
td {
    vertical-align: top;
}
</style>

<svelte:head>
  <title>Using keyboard shortcuts - MaxTo tutorial</title>
</svelte:head>
<h1><b>Keyboard shortcuts</b> lets you quickly move windows around, without even touching the mouse.</h1>
<p>
  MaxTo has a long range of built-in keyboard shortcuts, backed by its powerful <Link icon="map" href="/tutorial/recipes">recipes</Link>.
  In this tutorial we will explain how the default keyboard shortcuts work, and how you can use them most effectively.
</p>
<h2>Placing windows into regions</h2>
<p>
  MaxTo overrides some of the default Windows shortcuts, specifically the <Keys combination="Windows+arrow keys"></Keys> shortcuts.
  These are the shortcuts you are most likely to be familiar with already, as they have been built into Windows since Windows 7.
</p>
<p>
  But although the actual keys your press are the same, what happens when you press them isn't. Here is an overview:
</p>
<table use:responsiveTable>
    <thead>
        <tr>
            <th>Keyboard shortcut</th>
            <th>What it does in MaxTo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><Keys combination="Windows+Left"></Keys></td>
            <td>Move the active window to the closest region to its left.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Right"></Keys></td>
            <td>Move the active window to the closest region to its right.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Up"></Keys></td>
            <td>Move the active window to the closest region above.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Down"></Keys></td>
            <td>Move the active window to the closest region below.</td>
        </tr>
    </tbody>
</table>

<p>
  Windows' default keyboard shortcuts vary what they do based on the state of the window, so on the first 
  press of <Keys combination="Windows+Left"></Keys>, the window occupies the left half, on the second press 
  the right half, and the third press the window goes back to its original position. With MaxTo, the
  behavior is more consistent; the window will go to the region to the left.
</p>

<h2>Swapping windows</h2>
<p>
    When you use the move keyboard shortcuts above, only the foreground window is affected. If you are 
    in a situation where you need to see all the windows at once, using the swap keyboard shortcuts
    is more interesting.
</p>

<table use:responsiveTable>
    <thead>
        <tr>
            <th>Keyboard shortcut</th>
            <th>What it does in MaxTo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><Keys combination="Windows+Alt+Left"></Keys></td>
            <td>Swap the active window with the windows in the closest region to its left.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Alt+Right"></Keys></td>
            <td>Swap the active window with the windows in the closest region to its right.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Alt+Up"></Keys></td>
            <td>Swap the active window with the windows in the closest region above.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Alt+Down"></Keys></td>
            <td>Swap the active window with the windows in the closest region below.</td>
        </tr>
    </tbody>
</table>

<h2>Grid placement <Badge color="success" text="New in 2.1.0"></Badge></h2>

<p>
    In the early 2000s, a Windows utility called WinSplit Revolution gained some popularity.
    WinSplit, as it was known by its fans, laid out a 3x3 grid that mapped to your numpad.
    Each numpad corresponded to an anchor location around that point on the screen. So, pressing
    <Keys combination="Control+Alt+NumPad3" /> would place the window in the lower right corner
    of the screen, covering a quarter of the screen area.
</p>

<p>
    Repeatedly pressing the same shortcut key would make the window larger (to cover 2/3s of the
    screen horizontally), then smaller (to cover 1/3 of the screen horizontally).
</p>

<p>
    MaxTo supports this functionality since version 2.1.0, after considerable user feedback.
    It was also important to us that WinSplit Revolution has been discontinued, and had stopped
    working for quite a few users due to changes in Windows since it was developed.
</p>

<p>
    Here is a summary of the WinSplit keyboard shortcuts MaxTo supports out of the box:
</p>

<table class="bordered">
    <tbody>
        <tr>
            <td>
              <Keys combination="Control+Alt+7" />
              <p>
                Anchor: <b>Top left</b>
              </p>
              <ul>
                <li>1/2 width</li>
                <li>2/3 width</li>
                <li>1/3 width</li>
              </ul>
            </td>
            <td>
              <Keys combination="Control+Alt+8" />
              <p>
                Anchor: <b>Top</b>
              </p>
              <ul>
                <li>Full width</li>
                <li>1/3 width (centered)</li>
              </ul>
            </td>
            <td>
              <Keys combination="Control+Alt+9" />
              <p>
                Anchor: <b>Top right</b>
              </p>
              <ul>
                <li>1/2 width</li>
                <li>2/3 width</li>
                <li>1/3 width</li>
              </ul>
            </td>
        </tr>
        <tr>
            <td>
              <Keys combination="Control+Alt+4" />
              <p>
                Anchor: <b>Left</b>
              </p>
              <ul>
                <li>1/2 width</li>
                <li>2/3 width</li>
                <li>1/3 width</li>
              </ul>
            </td>
            <td>
              <Keys combination="Control+Alt+5" />
              <p>
                Anchor: <b>Center</b>
              </p>
              <ul>
                <li>Full screen</li>
                <li>2/3 width (centered)</li>
                <li>1/3 width (centered)</li>
              </ul>
            </td>
            <td>
              <Keys combination="Control+Alt+6" />
              <p>
                Anchor: <b>Right</b>
              </p>
              <ul>
                <li>1/2 width</li>
                <li>2/3 width</li>
                <li>1/3 width</li>
              </ul>
            </td>
        </tr>
        <tr>
            <td>
              <Keys combination="Control+Alt+1" />
              <p>
                Anchor: <b>Bottom left</b>
              </p>
              <ul>
                <li>1/2 width</li>
                <li>2/3 width</li>
                <li>1/3 width</li>
              </ul>
            </td>
            <td>
              <Keys combination="Control+Alt+2" />
              <p>
                Anchor: <b>Bottom</b>
              </p>
              <ul>
                <li>Full width</li>
                <li>1/3 width (centered)</li>
              </ul>
            </td>
            <td>
              <Keys combination="Control+Alt+3" />
              <p>
                Anchor: <b>Bottom right</b>
              </p>
              <ul>
                <li>1/2 width</li>
                <li>2/3 width</li>
                <li>1/3 width</li>
              </ul>
            </td>
        </tr>
    </tbody>
</table>

<h2>Oh, and one more thing</h2>

<p>
  There is one keyboard shortcut that doesn't fit neatly into the above sections. To center a window on 
  your screen quickly, without resizing it, you can press <Keys combination="Windows+Alt+C" />.
</p>

<p>
  If you want to create your own keyboard shortcuts, you can do that through the powerful recipes feature.
  All of the keyboard shortcuts are implemented using recipes, so in addition to letting you easily change
  the keyboard shortcuts, but you can also add additional actions. See 
  <Link icon="map" href="/tutorial/recipes">the tutorial on recipes</Link> for more details.
</p>