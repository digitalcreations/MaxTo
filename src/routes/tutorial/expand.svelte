<script>
import { Badge, Keys, Link, Alert, Carousel, AnnotatedImage } from '../../components.js';
</script>

<style>

</style>

<svelte:head>
  <title>Expanding windows - MaxTo tutorial</title>
</svelte:head>
<h1>You can think of <b>expanding and contracting</b> as the keyboard equivalent of window snapping. But it is actually a bit more than that.</h1>

<p>
  There is a new feature in town. The expand and contract window shortcuts are there to quickly resize a window until it reaches another edge.
  It will snap to window edges, regions and monitor edges by default
</p>

<p>
  Sometimes it is useful if a window would span multiple regions, because you are focusing on something for a bit. These keyboard shortcuts allow
  you to do that, in a faster way than changing your regions and then resizing your windows.
</p>

<p>
  There are 8 keyboard shortcuts to learn:
</p>

<table>
  <thead>
    <tr>
      <th>Expand</th>
      <th>Contract</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>
        <Keys combination="Windows+Ctrl+NumPad4" />
        <p>Expand the window leftwards.</p>
      </td>
      <td>
        <Keys combination="Windows+Alt+NumPad4" />
        <p>Contract the window leftwards.</p>
      </td>
    </tr>
    
    <tr>
      <td>
        <Keys combination="Windows+Ctrl+NumPad8" />
        <p>Expand the window upwards.</p>
      </td>
      <td>
        <Keys combination="Windows+Alt+NumPad8" />
        <p>Contract the window upwards.</p>
      </td>
    </tr>
    
    <tr>
      <td>
        <Keys combination="Windows+Ctrl+NumPad6" />
        <p>Expand the window rightwards.</p>
      </td>
      <td>
        <Keys combination="Windows+Alt+NumPad6" />
        <p>Contract the window rightwards.</p>
      </td>
    </tr>
    
    <tr>
      <td>
        <Keys combination="Windows+Ctrl+NumPad2" />
        <p>Expand the window downwards.</p>
      </td>
      <td>
        <Keys combination="Windows+Alt+NumPad2" />
        <p>Contract the window downwards.</p>
      </td>
    </tr>
  </tbody>
</table>

<p>
  There is a thing to note here. The keyboard shortcuts starting with <Keys combination="Windows+Alt" /> are not the opposites of <Keys combination="Windows+Ctrl" />.
  If you keep using expand and contract leftwards, the window will continously move leftwards. You are essentialy picking a direction and an operation (expand or contract).
</p>

<p>
  Contracting a window means that it will shrink on the opposite side. This means that the "opposite" of <i>Expand left</i> is <i>Contract right</i>.
</p>

<h2>Customizing the behavior</h2>

<p>
  This feature is implemented as 8 separate recipes. This means that you can customize how it works &mdash; e.g. by changing it to snap just to region edges and monitor edges
  &mdash; once you've read the next chapter of the tutorial.
</p>