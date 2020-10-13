<script>
    import { Code, Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys, AnnotatedImage, StringPartVisualizer } from "../../components.js";
    import { mdiConsole, mdiFormatTitle, mdiRegex } from '@mdi/js';
  </script>
  
  <svelte:head>
    <title>Find any window - MaxTo how-tos</title>
  </svelte:head>
  
<h1>When creating some recipes, you may need to <b>find a specific window</b> to operate on it. This how-to explains how.</h1>
  
<p>
    Many of the commands available for use in recipes accept a <Code icon={mdiConsole}>/Window</Code> parameter, which lets you locate a specific window.
    To use it, you will have to know a few things about how windows (and programs in general) works on Windows.
</p>

<p>
    There are three pieces of information available for determining if a window is the window you are looking for: 
    process name, window class and window title.
</p>

<ul>
  <li>
    <p>A process is a single instance of a program. The <b>process name</b> is the name of the executable (e.g. the .exe file)
    without the .exe extension.</p>
  </li>
  <li>
    <p>
      A window has a title and a class. The <b>window title</b> is the part you can see in the title bar of the window.
      The window class is a value that is normally hidden from everyone but programmers, but is a value that would
      typically be shared across multiple windows from the same program. The developer of the program decides
      what the window class is. 
    </p>
  </li>
</ul>

<Alert kind=info>
  <h2>Window classes</h2>
  <p>
    When a program in Windows wants to show a window, it first needs to register a window class. The developer
    gives their window class a name, which sets some properties of the windows that are created using that window class.
    They can create multiple windows from a single window class, which is typically what is done in
    <abbr title="Multiple Document Interfaces">MDI</abbr> programs, where each document is opened in a new window 
    (like in Microsoft Word).
  </p>
</Alert>

<p>
  In most cases it makes sense to compose your recipes relying on the process name and window title, and ignoring
  the window class. There are specific cases where the window class is required.
</p>

<h2>Searching for windows</h2>

<p>
  When you want to locate a window, you can provide a search string for each of these 3 properties. In the user 
  interface, for the <Link href="/reference/commands/window/move">move window command</Link>, it looks like this:
</p>

<AnnotatedImage src="/how-to/find-window/search.png" caption="Searching for any Notepad window" />

<p>
  The user interface does a good job of separating the 3 parts you are searching for, so you can learn what exactly
  is matched. In this case, we've chosen to both limit matched windows to any Notepad processes, and any window that
  ends in <q> - Notepad</q> (which is a pattern all Notepad windows follow in English versions of Windows). 
  The <q>*</q> character is a wildcard, meaning it will match anything.
</p>

<p>
  This query is quite broad, in that it finds all currently open Notepad windows, and in some cases you may want that.
  However, you may also want to be more strict and e.g. use <q>mylogfile.txt - Notepad</q> as the window title.
</p>

<h2>From the command line</h2>

<p>
  If you were to invoke the previous command from the command line, MaxTo has its own query format for 
  window queries, as we call them. Here is an overview of the syntax where all the parts have been specified:
</p>

<StringPartVisualizer mode=window line="\MSPaint\MSPaintApp\* - Paint" showValuesInTable={true} />

<p>
  Notice that you can look at this as a path into a strange filesystem, where the folders are organized hierarchically
  by process name, window class and then window title.
</p>

<h2>Wildcards and regular expressions</h2>

<p>
  MaxTo supports both wildcards and regular expressions when dealing with window queries. In most cases you will
  want to stick to using wildcards, as they are easier to read. However, regular expressions provide some specificity, 
  in that you can exclude windows based on stricter patterns.
</p>

<p>
  We'll use Visual Studio Code as an example. As I am editing the file for the contents of this page, its title bar
  reads: <Code icon={mdiFormatTitle}>● find-window.svelte - maxto-docs [WSL: Ubuntu] - Visual Studio Code</Code>. That
  is quite the complex title bar. Notice the dot at beginning, which indicates that I have unsaved changes in the file,
  and the WSL part, which indicates that it is connected to a remote WSL environment.
</p>

<p>
  So if I wanted to find a Visual Studio Code window that was <b>not</b> using a remote environment, it would be impossible
  to do using simply wildcards. It is possible to find windows that <b>are</b> using remote environments, that would
  look like this:
</p>

<StringPartVisualizer mode=window line="\VSCode\\* - * [*] - Visual Studio Code" showTable={false} />

<p>
  If you wanted to find windows not using a remote environment, the regular expression we need to use is 
  <Code icon={mdiRegex}>^(● )?(.+?) - ([^[]+?) - Visual Studio Code$</Code>
</p>

<p>
  This regular expression is quite complex, and while we consider teaching regular expressions to be outside of the
  scope of MaxTo's manual, here is a quick overview of what this regular expression does:
</p>

<ul>
  <li><p>The <Code icon={mdiRegex}>^</Code> and <Code icon={mdiRegex}>$</Code> at the start and end of the expression
  ensures that the expression matches the entire window title.</p></li>
  <li><p><Code icon={mdiRegex}>(• )?</Code> matches both if there are saved and unsaved changes.</p></li>
  <li><p><Code icon={mdiRegex}>(.+?)</Code> matches the file name.</p></li>
  <li><p><Code icon={mdiRegex}>([^[]+?)</Code> matches the project name, but excludes anything in brackets (the remote environment).</p></li>
</ul>

<Alert kind=info>
  <h2>Learning regular expressions</h2>
  
  <p>
    Regular expressions are powerful, but can take a bit of time to become proficient at. Here are some resources that I've found helpful:
  </p>
  
  <ul>
    <li><p><Link href="https://www.regular-expressions.info/index.html?wlr=1">regular-expressions.info</Link> and their tool <Link href="https://www.regexbuddy.com/">RegexBuddy</Link> (Windows program), which I've used extensively over the years.</p></li>
    <li><p><Link href="https://regexr.com/">RegExr</Link> is a online tool to help you write and test regular expressions.</p></li>
    <li><p><Link href="https://regex101.com/">regular expressions 101</Link> is another online tool to write and test regular expressions.</p></li>
  </ul>
  
  <p>
    Note that MaxTo supports C#/.NET's regular expression syntax, which only RegexBuddy supports at the time of writing. Most regular expression syntaxes are very similar, and in practice you should be able to use whichever tool above you feel comfortable with.
  </p>
</Alert>

<p>
  
</p>
