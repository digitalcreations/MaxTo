<script>
    import { Code, Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys, AnnotatedImage, Annotation } from "../../components.js";
    import { mdiConsole, mdiFormatTitle, mdiRegex } from '@mdi/js';
  </script>
  
  <svelte:head>
    <title>Locking windows in place - MaxTo how-tos</title>
  </svelte:head>
  
<h1>You may want to keep a specific window available all the time, e.g. for note-taking, e-mail or similar. You can do that using recipes.</h1>
 
<p>
    The idea is simple, you want to keep your favorite note-taking app on the screen at all times. I sort of like Notepad,
    so I am going to use that in this example. This will however work with any program you may have installed, you'll
    just need to be able to consistently identify the window. See our <Link href="/how-to/find-window">how-to on
    how to find any window</Link> for details on that.
</p>

<p>
    The trick in this article will be accomplished using two simple components:
</p>

<ul>
  <li><p>The <Link href="/reference/triggers/window/moved">window:moved</Link> trigger. This triggers whenever a window is moved, but we can limit it to only trigger for specific windows.</p></li>
  <li><p>The <Link href="/reference/commands/window/move">window:move</Link> command. This lets us place the window back where it belongs.</p></li>
</ul>

<p>
    Using this combination will not prevent the window from being moved, but will immediately move it back when it has been moved.
</p>

<h2>Creating the recipe</h2>

<Alert kind=info>
  <h3>Don't want to go through all these steps?</h3>
  <p>
    Yeah, I know, it looks like a lot of work. I've exported <Link href="/how-to/lock-window/lock_notepad.recipe.json">the final recipe</Link> so you can just download it. Once you have the file,
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
  Name your recipe something descriptive (or funny, if that is what you feel like today), and then hit "Add trigger":
</p>

<AnnotatedImage src="/how-to/lock-window/name_recipe.png" caption="Name your recipe and add a trigger">
  <Annotation active x="60%" y="20%"  text="Funny name goes here" />
  <Annotation active x="55%" y="78%"  text='Click "Add Trigger"' />
</AnnotatedImage>

<p>
  Scroll down until you find the <b>Window moved</b> trigger, and select it:
</p>

<AnnotatedImage src="/how-to/lock-window/add_trigger.png" caption="Add the trigger">
  <Annotation active x="50%" y="55%"  text="It's this one" />
</AnnotatedImage>

<p>
  I've noticed that my Notepad window has a title of <Code>log - Notepad</Code> when my log file is open, and I know that
  the process name is <Code>Notepad</Code> (the process name is the name of the executable without the .exe file extension).
  Select <b>Search for window</b>, and type in <Code>Notepad</Code> under <b>Process name</b>, and <Code>log - Notepad</Code>
  under <b>Window title</b>. See the <Link href="/how-to/find-window">how to find any window</Link> how-to for more details
  on this.
</p>

<AnnotatedImage src="/how-to/lock-window/trigger.png" caption="Set up the trigger">
  <Annotation active x="40%" y="25%"  text="Select" />
  <Annotation active x="50%" y="53%"  text="Type" />
  <Annotation active x="50%" y="67%"  text="Type" />
  <Annotation active x="65%" y="75%"  text='Click "Add ingredient"' />
</AnnotatedImage>

<p>
  You want to select the <b>Move window</b> ingredient.ArticleCard
</p>
  
<AnnotatedImage src="/how-to/lock-window/add_ingredient.png" caption="Add the ingredient">
  <Annotation active x="50%" y="55%"  text="Here it is" />
</AnnotatedImage>

<p>
  You can either leave the <b>Window argument</b> set to <b>Foreground window</b>, since Notepad will be the foreground
  window when the trigger happens, or you can use the same settings as above. For the <b>Region</b> property, you can
  type something like "top right" (or whatever corresponds to the region you want to use). Leave all the other arguments
  at their defaults. Then click <b>Save recipe</b>.
</p>

<AnnotatedImage src="/how-to/lock-window/ingredient.png" caption="Set the Region argument">
  <Annotation active x="50%" y="30%"  text="Fill this" />
  <Annotation active x="82%" y="78%"  text="Save it" />
</AnnotatedImage>

<p>
  Your recipe will immediately be active. Try moving the Notepad window around (you'll need to open a file called <Code>log.txt</Code> for the trigger to work).
  You'll see that immediately after moving the window, it will snap right back into the top right region.
</p>

<h2>Future ideas</h2>

<p>
  Using just this recipe, you can see that it would be quite easy to create similar recipes. Here are some ideas you
  can try:
</p>

<ul>
  <li><p>Ensure every window is always locked into the nearest region when it is created.</p></li>
  <li><p>Automatically move your e-mail client when started to a specific virtual desktop.</p></li>
</ul>