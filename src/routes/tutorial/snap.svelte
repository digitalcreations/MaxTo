<script>
import { Badge, Keys, Link, Alert, LinkList, LinkListItem, AnnotatedImage, Annotation, ArticleCard } from '../../components.js';
import contents from '../../contents.js';
</script>

<style>
</style>

<svelte:head>
  <title>Window snapping - MaxTo tutorial</title>
</svelte:head>

<h1>With MaxTo, windows will <b>snap</b> together when you move or resize them, almost as if they are magnetic.</h1>

<p>
    The effect of window snapping is subtle, and you may not notice it at first. However, once you are used to it, it is addictive.
</p>

<p>
    When move a window, MaxTo will look for other window edges and the working area edges. If your window gets closer to another
    border than a given threshold, it will snap to that edge. The same thing happens when you resize a window. 
</p>

<figure>
    <video controls autoplay loop>
        <source src="/tutorial/snap/snap.mp4" type="video/mp4" />
        <source src="/tutorial/snap/snap.webm" type="video/webm" />
    </video>

    <figcaption>Snapping in action.</figcaption>
</figure>

<h2>Snapping to region edges</h2>

<p>
    MaxTo also supports snapping to region edges. Since region edges are not visible to you while you are dragging, this functionality
    is disabled by default (mostly because we thought you'd think MaxTo had gone bonkers if it snapped to something you couldn't see).
</p>

<p>
    You can turn it on by going into the MaxTo settings (<Keys combination="Windows+Control+T" />), and checking <i>Region edges</i> in the
    <i>Window behavior</i> tab.
</p>

<p>
    <b>PS!</b> You can completely disable window snapping by unchecking all of the boxes here.
</p>

<AnnotatedImage src="/reference/settings/behavior.png" caption="The settings for window behavior" />

<p>
    Notice that you can also set the snap distance. We recommend leaving at the default value of 10px, however your personal
    preference may vary.
</p>
