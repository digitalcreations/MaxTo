<script>
import { Alert, Link } from '../../components.js';
</script>

<svelte:head>
  <title>What are regions - MaxTo tutorial</title>
</svelte:head>
<h1><b>Regions</b> are rectangular areas that your windows will maximize to.</h1>
<p>
  Congratulations on installing MaxTo. There is a lot to learn with MaxTo, and we are starting
  with the most central concept in MaxTo: <b>regions</b>.
</p>
<p>
  You can imagine MaxTo dividing your monitor into smaller monitors, and whenever you maximize
  windows, the window will stay within one of the smaller regions. If you use the mouse and
  click the maximize button, the window will go into the region the mouse points to.
</p>
<Alert type=default>
  <h2>An analogy</h2>
  <p>
    If you are familiar with Windows' Snap feature (formerly Aero Snap in Windows 7), MaxTo's
    regions can be thought of as a configurable version of that built-in Windows feature.
  </p>
  <p>
    For more details about working with Windows built-in window-management features, see 
    <Link href="/how-to/windows-without-maxto">how to use Windows without MaxTo</Link>.
  </p>
</Alert>
<p>
  When you start MaxTo the first time &mdash; and any time you want to later &mdash;
  you can set up your regions. MaxTo only has one set of regions at a time, we sometimes
  call these your active regions. You can either set them up manually; or you can use a preset.
</p>
<figure>
  <img src="/tutorial/regions/change.png" alt="The change regions window of MaxTo">
  <figcaption>Using the change regions window, you can set your regions up.</figcaption>
</figure>
<p>
  To find the change regions window, double-click on the MaxTo icon in the notification area.
  The change regions window should show up, one on each of your monitors.
</p>
<Alert type=info>
  <h2>Can't find the MaxTo icon?</h2>
  <p>
    Sometimes newly installed applications' notification area icons (systray icons) are hidden
    by Windows to declutter the notification area. If you can't see the MaxTo icon, click the 
    small up arrow on the left of the notification area, find the MaxTo icon there, and drag
    it out of the box and onto the notification area. Problem solved.
  </p>
  
  <figure>
    <video controls autoplay loop>
        <source src="/tutorial/regions/systray.mp4" type="video/mp4" />
        <source src="/tutorial/regions/systray.webm" type="video/webm" />
    </video>

    <figcaption>Finding the MaxTo icon.</figcaption>
</figure>
</Alert>
<p>
  You set up your regions by starting with a blank screen (the monitor is effectively one large region), 
  and then splitting the working area of the monitor into two regions. You can split a region either 
  vertically or horizontally, and you can split regions multiple levels deep. Eventually, you'll reach 
  the minimum allowed window size, and you won't be able to split into any more regions. Don't worry,
  depending on your monitor size you will usually split the monitor into 3-5 regions unless
  you have a special use case in mind.
</p>
<h2>Loading a preset</h2>
<p>
  MaxTo comes with a small, but useful, set of region presets. They are handy either as starting
  points that you can modify, or you can use them directly.
</p>
<p>
  To load a preset, click the Preset button in the top right corner of the monitor where you want
  to load it. Then click Load Preset, and a window will pop up with the default presets.
</p>
<figure>
  <img src="/tutorial/regions/preset.png" alt="The load presets dialog">
  <figcaption>The load presets dialog has a default set of regions that you can load.</figcaption>
</figure>
<Alert type=info>
  <h2>Ultra-wide alert</h2>
  <p>
    If you have an ultra-wide monitor (a monitor with an aspect ratio of 21:9 or wider), we strongly
    recommend you try out the Ultra-wide three-way preset, which has a large region in the center and
    two smaller ones on the sides.
  </p>
</Alert>