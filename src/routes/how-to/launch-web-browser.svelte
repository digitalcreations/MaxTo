<script>
    import Code from '$lib/components/Code.svelte';
    import Alert from '$lib/components/Alert.svelte';
    import Accordion from '$lib/components/Accordion.svelte';
    import AccordionItem from '$lib/components/AccordionItem.svelte';
    import Link from '$lib/components/Link.svelte';
    import Keys from '$lib/components/Keys.svelte';
    import AnnotatedImage from '$lib/components/AnnotatedImage.svelte';
    import Annotation from '$lib/components/Annotation.svelte';
    import { responsiveTable } from '$lib/actions/responsive_table.js';
    import { mdiConsole } from '@mdi/js';
  </script>
  
  <svelte:head>
    <title>Launch web browser into region - MaxTo how-tos</title>
  </svelte:head>
  
<h1>With MaxTo, you can use recipes to  launch any program and place it where you want. Browsers are however somewhat special.</h1>
  
<p>
    The reason browsers are a bit different than most other programs, is that the process you launch is usually not the 
    same process that shows the window. When you launch e.g. <Code icon={mdiConsole}>chrome https://maxto.net</Code>,
    the process that starts isn't the same process that shows the website &mdash; it simply sends a signal to an existing
    browser window that the user wants to open the URL. If you don't already have a browser open, it will start another
    process, and then signal it. Then the initial process will exit. It can also be hard to locate the browser window
    that contains the page you launched, as the window title of the browser is the currently active tab, which is not
    necessarily the website you launched.
</p>

<p>
    This means that it can be difficult to create the same recipe as you would for other programs, where the flow is 
    basically launch program, wait for it to be ready, then do something to the foreground window.
</p>

<h2>Goal</h2>

<p>
    The goal of this how-to is to create a recipe that launches a new browser window that we place in a region on a 
    specific virtual desktop when we press a hotkey. We'll try to do this Google Chrome and Firefox, but the same exact 
    example should also work well with most Chromium-based browsers (as they share the same command line arguments).
</p>

<p>
    We will not just show you exactly how to create this recipe, but will also try to outline how we figured out what
    to do as well.
</p>

<h2>Background research</h2>

<p>
    Before we start, it always helps to do some background research on the command line for the browsers.
</p>

<Accordion>
    <AccordionItem title="Google Chrome (and other Chromium browsers)">
        <p>Google does not document the supported command line arguments and switches, but Peter Beverloo has
            created <Link href="https://peter.sh/experiments/chromium-command-line-switches/">a website</Link>
            that updates automatically to list all of them. Google Chrome is a very large project, and it has hundreds
            of possible switches that we can use. The comments can also be somewhat cryptic, as they are intended
            for the Chrome programmers, and not for the end users.
        </p>
        
        <p>
            The most helpful switches I found are:
        </p>
        
        <table use:responsiveTable>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Code icon={mdiConsole}>--new-window</Code></td>
                    <td>Launches URL in new browser window.</td>
                </tr>
                <tr>
                    <td><Code icon={mdiConsole}>--start-maximized</Code></td>
                    <td>Starts the browser maximized, regardless of any previous settings.</td>
                </tr>
            </tbody>
        </table>
    </AccordionItem>
    
    <AccordionItem title="Firefox">
        <p>Firefox has a proper <Link href="https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options">command line reference</Link>,
        and there are a lot fewer options than for Google Chrome.</p>
        
        <p>The most interesting switches we found were:</p>
        
        <table use:responsiveTable>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Code icon={mdiConsole}>-new-window</Code></td>
                    <td>Open URL in a new window.</td>
                </tr>
                <tr>
                    <td><Code icon={mdiConsole}>-url</Code></td>
                    <td>Open URL in a new tab or window, depend on the browser option. -url can be omitted. You may list multiple URLs, separated by spaces.</td>
                </tr>
            </tbody>
        </table>
    </AccordionItem>
</Accordion>

<p>
    In summary, we can see that both browsers support opening a URL in a new window, which will likely let us target
    the newly opened window in our recipe.
</p>

<h2>Creating the recipe</h2>

<Alert kind=info>
    <h3>Don't want to go through all these steps?</h3>
    <p>
        Yeah, I know, it looks like a lot of work. I've exported <Link href="/how-to/launch-web-browser/launch-chrome.recipe.json">the final recipe</Link> (for Google Chrome) so you can just download it. Once you have the file,
        click <b>Import recipe</b> in the <b>Recipes</b> tab in Settings. There you go, saved you 2 minutes.
    </p>
</Alert>

<p>
    Get started by creating a new recipe in the Recipes view in Settings (hit <Keys combination="Windows+Control+T" /> to open Settings). 
</p>
  
<AnnotatedImage src="/how-to/lock-window/create_recipe.png" caption="Create a new recipe">
    <Annotation active x="55%" y="40%"  text="It's here" />
</AnnotatedImage>
  
<p>
      Give your recipe a name, and click <b>Add trigger</b>.
</p>
  
<AnnotatedImage src="/how-to/launch-web-browser/recipe.png" caption="Name your recipe and add a trigger">
    <Annotation active x="60%" y="20%"  text="Funny name goes here" />
    <Annotation active x="55%" y="78%"  text='Click "Add Trigger"' />
</AnnotatedImage>
  
<p>
    We are looking for a hotkey trigger, it should be right at the top.
</p>

<AnnotatedImage src="/how-to/launch-web-browser/add_trigger.png" caption="Add the trigger">
  <Annotation active x="50%" y="25%"  text="It's this one" />
</AnnotatedImage>

<p>
    Assign a hotkey, we chose <Keys combination="Windows+Control+X" />, and afterwards click <b>Add ingredient</b>.
</p>

<p>
    <b>PS!</b> You can click on the dropdown and simply press the button on the keyboard that you want to use.
</p>

<AnnotatedImage src="/how-to/launch-web-browser/hotkey.png" caption="Add the trigger">
    <Annotation active x="65%" y="30%"  text="That's my hotkey" />
    <Annotation active x="65%" y="75%"  text='Click "Add ingredient"' />
</AnnotatedImage>

<p>
    This time we want the "Launch a program" ingredient, you can find it at the bottom:
</p>

<AnnotatedImage src="/how-to/launch-web-browser/add_launch.png" caption="Add the first ingredient">
    <Annotation active x="50%" y="72%"  text="It's here" />
</AnnotatedImage>

<p>
    You'll need to fill in a few details here, including the path to Google Chrome (may vary a bit depending on which
    version you have installed), the arguments <Code icon={mdiConsole}>--new-window https://maxto.net</Code> and 
    make sure it waits for the specific window <Code icon={mdiConsole}>* - MaxTo - Google Chrome</Code>.
</p>

<p>
    From observation we know that the title of the MaxTo website we are opening is usually "Home - MaxTo", but if your
    browser switches language it can be "Hjem - MaxTo" (or some text in other languages), which is the reason for using 
    a wildcard.
</p>

<Alert kind=info>
    <h3>On portable paths</h3>
    <p>
        MaxTo is offering to help you fix a non-portable file path in the image below. Note that in the recipe file we 
        have prepared, we've replaced the static file path with a file path containing an environment variable. MaxTo 
        fixed that for us, a feature which is mostly useful if you intend to share your recipes with others.
    </p>
</Alert>

<p>
    Finally, click <b>Add ingredient</b> to add a second ingredient.
</p>

<AnnotatedImage src="/how-to/launch-web-browser/launch_1.png" caption="Fill in path and arguments">
    <Annotation active x="75%" y="22%"  text="Path to Google Chrome" />
    <Annotation active x="60%" y="47%"  text="Arguments" />
</AnnotatedImage>

<AnnotatedImage src="/how-to/launch-web-browser/launch_2.png" caption="Fill in window to wait for">
    <Annotation active x="50%" y="20%"  text='Check "Search for window"' />
    <Annotation active x="60%" y="68%"  text='Fill in "Window title"' />
    <Annotation active x="65%" y="75%"  text='Click "Add ingredient"' />
</AnnotatedImage>

<p>
    We now want to add the ingredient that will move the window to a specific region in a virtual desktop,
    so select the <b>Move window</b> command.
</p>

<AnnotatedImage src="/how-to/launch-web-browser/add_move.png" caption="Add the second ingredient">
    <Annotation active x="50%" y="60%"  text="It's here" />
</AnnotatedImage>

<p>
    You can use the same arguments for finding the window as you did earlier, and then set the numbered virtual
    desktop to 2, and the region to <b>top right</b>. Once you are done, hit <b>Save changes</b>, and the recipe will be 
    available to run immediately.
</p>

<AnnotatedImage src="/how-to/launch-web-browser/move.png" caption="Set it up">
    <Annotation active x="50%" y="26%"  text="Same as before" />
    <Annotation active x="55%" y="50%"  text="Virtual desktop" />
    <Annotation active x="50%" y="70%"  text="Region" />
    <Annotation active x="82%" y="78%"  text="Save" />
</AnnotatedImage>

<p>
    Before you run the recipe, make sure you have at least two virtual desktops. Press 
    <Keys combination="Windows+Control+Right" /> to switch to the next one. If nothing happens when you do that, you
    can press <Keys combination="Windows+Control+D" /> to create one.
</p>

<p>
    Test your recipe by hitting your hotkey (mine was <Keys combination="Windows+Control+X" />). You will notice
    that Google Chrome launches, and after the website has loaded, MaxTo will move the window to the other virtual
    desktop.
</p>

<p>
    This takes a while because MaxTo has to wait for the window to be created, and for the website to load, before
    it can find the window and move it.
</p>