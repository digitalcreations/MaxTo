<script>
import Keys from '$lib/components/Keys.svelte';
import AnnotatedImage from '$lib/components/AnnotatedImage.svelte';
import Annotation from '$lib/components/Annotation.svelte';
import Alert from '$lib/components/Alert.svelte';
import Link from '$lib/components/Link.svelte';
import SectionCard from '$lib/components/SectionCard.svelte';
import SectionList from '$lib/components/SectionList.svelte';
import { responsiveTable } from '$lib/actions/responsive_table.js';
import { mdiFrequentlyAskedQuestions, mdiNotebook } from '@mdi/js';
</script>

<style>
table:not(.bordered) td:first-child {
    min-width: 260px;
}
</style>

<svelte:head>
    <title>Virtual desktops - MaxTo tutorial</title> 
</svelte:head>

<h1>Use <b>virtual desktops</b> effectively with MaxTo.</h1>

<p>
    Virtual desktops are a relatively new feature to Windows. They were first exposed to end users with Windows 10, and MaxTo can help you use them properly.
    In summary, virtual desktops allows you to have multiple workspaces on the same computer, and quickly switch between them without changing the position
    of your windows.
</p>

<h2>Virtual desktop basics</h2>

<p>
    It is helpful to know how virtual desktops work in Windows before adding a tool such as MaxTo. If you press <Keys combination="Windows+Tab" />, Windows
    will display the new, virtual desktop-aware Task View, which is meant as a sort of replacement for <Keys combination="Alt+Tab" />. The new task switcher
    stays on the screen after you release the Windows key, and allows you to select a window to switch to.
</p>

<p>
    Up near the top, you'll find a button that allows you to add a virtual desktop: 
</p>

<AnnotatedImage
    src="/tutorial/virtual_desktops/default.png"
    alt="Windows 10 showing New virtual desktop button"
    caption="Windows 10 Task View when you have only one virtual desktop">
    <Annotation x="17%" y="4%" text="Look at this" />
</AnnotatedImage>

<p>
    When you add a virtual desktop, Windows will switch to the new virtual desktop automatically.
</p>

<AnnotatedImage
    src="/tutorial/virtual_desktops/multiple.png"
    alt="Windows 10 showing two virtual desktops and Notepad open on one"
    caption="Windows 10 Task View with two virtual desktops and Notepad open on one">
</AnnotatedImage>

<p>
    Clicking on a virtual desktop will switch to it automatically. You can also click and drag the Notepad window to the other desktop, and it will be moved there.
</p>

<h2>Navigating with the keyboard</h2>

<Alert kind=info>
    <h2>Works with Windows 10</h2>
    
    <p>
        The keyboard shortcuts in this section are provided by Windows &mdash; not MaxTo &mdash; and therefore
        work even if you do not have MaxTo installed.
    </p>
</Alert>

<p>
    These keyboard shortcuts help you navigate your virtual desktops quickly.
</p>

<table use:responsiveTable>
    <thead>
        <tr>
            <th>Keyboard shortcut</th>
            <th>Description</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td><Keys combination="Windows+Control+Left" /></td>
            <td>Previous virtual desktop</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Control+Right" /></td>
            <td>Next virtual desktop</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Ctrl+D" /></td>
            <td>Create a new virtual desktop.</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Control+F4" /></td>
            <td>Close the current virtual desktop. The apps on that virtual desktop is moved to another desktop.</td>
        </tr>
    </tbody>
</table>

<p>
    There are unfortunately no keyboard shortcuts in Windows 10 for moving windows between virtual desktops, but MaxTo can fix that for you.
</p>

<h2>How MaxTo helps</h2>

<p>
    MaxTo introduces a few extra, default keyboard shortcuts that allow you to quickly move windows between virtual desktops.
</p>

<table use:responsiveTable>
    <thead>
        <tr>
            <th>Keyboard shortcut</th>
            <th>Description</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td><Keys combination="Windows+Control+Alt+Left" /></td>
            <td>Move window to previous virtual desktop</td>
        </tr>
        <tr>
            <td><Keys combination="Windows+Control+Alt+Right" /></td>
            <td>Move window to next virtual desktop</td>
        </tr>
    </tbody>
</table>

<p>
    You can also work with virtual desktops in your recipes. Many commands support choosing virtual desktops, so you can place
    windows quickly. See <Link href="/reference/commands/window/move">the move window command</Link> for an example.
</p>

<h2>What's next</h2>

<p>
    You've reached the end of the tutorial. Maybe you can find something else of interest in these sections:
</p>

<SectionList>
    <SectionCard href="/how-to" title="How-tos" text="Guides that show you examples you can use." icon={mdiFrequentlyAskedQuestions} />
    <SectionCard href="/reference" title="Reference" text="Goes into detail on the moving parts of MaxTo." icon={mdiNotebook} />
</SectionList>