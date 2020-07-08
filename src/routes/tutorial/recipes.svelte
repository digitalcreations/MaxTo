<script>
import { Badge, Keys, Link, Alert, LinkList, LinkListItem, AnnotatedImage, Annotation, Icon, ArticleCard } from '../../components.js';
import contents from '../../contents.js';
</script>

<style>
</style>

<svelte:head>
  <title>Recipes - MaxTo tutorial</title>
</svelte:head>

<h1><b>Recipes</b> are your means to customizing MaxTo just the way you want it.</h1>

<p>
    This powerful feature can be used to make your windows behave differently, or to automate tasks
    that you do often.
</p>

<p>
    A MaxTo recipe consists of one or more triggers, and a set of ingredients. Whenever one trigger
    occurs, MaxTo will run through the list of ingredients.
</p>

<p>
    A <b>trigger</b> could be something like:
</p>

<LinkList>
    <LinkListItem href="/reference/triggers/keyboard/hotkey">
        Pressing a keyboard shortcut
    </LinkListItem>
    
    <LinkListItem href="/reference/triggers/monitor/connected">
        Connecting a specific monitor
    </LinkListItem>
    
    <LinkListItem href="/reference/triggers/windows/unlock">
        Unlocking your computer
    </LinkListItem>
</LinkList>

<p>You can find a complete list of <Link href="/reference/triggers">the supported triggers in the reference manual</Link>.</p>

<p>
    An <b>ingredient</b> could be actions like:
</p>

<LinkList>
    <LinkListItem href="/reference/commands/window/move">
        Moving a window into a region
    </LinkListItem>
    <LinkListItem href="/reference/commands/ui/open">
        Opening a MaxTo window
    </LinkListItem>
    <LinkListItem href="/reference/commands/regions/apply">
        Applying a preset
    </LinkListItem>
    <LinkListItem href="/reference/commands/settings/toggle">
        Changing a MaxTo setting
    </LinkListItem>
</LinkList>

<p>You can find a complete list of <Link href="/reference/commands">the supported commands in the reference manual</Link>.</p>

<h2>Creating your first recipe</h2>

<p>
    I change my regions quite often, and therefore I have assigned keyboard shortcuts to quickly load the regions I want to use.
</p>

<p>
    We'll be making a recipe that reacts to a hotkey <Keys combination="Windows+Control+Z" /> to cycle between a list of presets, 
    and then quickly show the regions we loaded.
</p>

<p>
    To do that, we will need the <Link href="/reference/triggers/keyboard/hotkey">keyboard:hotkey</Link> trigger,
    and two commands: <Link href="/reference/commands/regions/cycle">regions:cycle</Link> and 
    <Link href="/reference/commands/regions/highlight">regions:highlight</Link>. 
</p>

<Alert kind="info">
    <h3>Some things are just coincidence...</h3>
    <p>
        It is just coincidence that we are using two commands from the same category in this recipe.
        It is perfectly valid to use commands from different categories in the same recipe.
    </p>
</Alert>

<ol>
    <li>
        <p>To get started, you will need to open MaxTo's settings. Find MaxTo's icon in the notification area (that is the area near the clock).
        Right-click the MaxTo icon, and select <b>Settings</b>.</p>
    </li>
    <li>
        <p>Once MaxTo's settings opens, you should already be on the <b>Recipes</b> tab. Click the <b>New recipe</b> button.</p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/settings_opened.png" 
            alt="MaxTo's settings window showing the Recipes tab."
            caption="MaxTo's settings window.">
            <Annotation active x="60%" y="45%"  text="Click the <b>New recipe</b> button" />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>All recipes have a name, so you can easily identify it. I am going to call mine <q>Cycle presets</q>, 
            feel free to call yours something else. Once you've named your recipe, click <b>Add trigger</b>.</p>
            
        <AnnotatedImage 
            src="/tutorial/recipes/named_recipe.png" 
            alt="MaxTo's settings window showing where you can name your recipe."
            caption="Name you recipe and create a trigger.">
            <Annotation active x="75%" y="34%"  text="Name your recipe" />
            <Annotation active x="65%" y="81%"  text="Click <b>Add trigger</b>." />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>You'll need to select the type of trigger you want to add. We want a <b>Hotkey</b> trigger.</p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/trigger_type.png" 
            alt="MaxTo's settings window showing the Recipes tab."
            caption="Select the Hotkey trigger.">
            <Annotation active x="63%" y="34%"  text="Select <b>Hotkey</b>" />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>Click the <Icon inline set="brands" name="windows" /> and <b>Control</b> toggle buttons (so they turn blue). Then click the dropdown, and hit the <Keys combination="Z"/> key on your keyboard. You can also select the Z from the dropdown list.</p>
        <p>Afterwards, click <b>Add ingredient</b>.</p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/hotkey.png" 
            alt="MaxTo's settings window editing a hotkey."
            caption="Set up your hotkey.">
            <Annotation active x="75%" y="40%"  text="Set up hotkey" />
            <Annotation active x="73%" y="79%"  text="Click <b>Add ingredient</b>." />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>You'll need to select the type of ingredient to add. Our first ingredient will be <b>Cycle presets</b>. 
        This command is used to apply one of a set of region presets every time it is run.</p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/ingredient_type.png" 
            alt="MaxTo's settings window showing a list of available ingredients."
            caption="Add the first ingredient.">
            <Annotation active x="75%" y="32%" text="Select <b>Cycle presets</b>" />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>
            This ingredient requires that you select which monitor it should load presets on. I've selected
            <b>Current monitor</b>, which is the monitor that has the active window.
        </p>
        
        <p>
            The you'll need to select which presets you want to cycle between. I've selected my 3 favorites here,
            just make sure you select more than one. Afterwards, click <b>Add ingredient</b> again.
        </p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/cycle_presets.png" 
            alt="MaxTo's settings window showing the cycle presets editor."
            caption="Set up the cycle presets ingredient.">
            <Annotation active x="57%" y="39%" text="Select <b>Current monitor</b>" />
            <Annotation active x="60%" y="68%" text="Select your presets" />
            <Annotation active x="73%" y="79%"  text="Click <b>Add ingredient</b>." />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>This time we want to select the <b>Highlight regions</b> ingredient.</p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/ingredient_type.png" 
            alt="MaxTo's settings window showing a list of available ingredients."
            caption="Add the second ingredient.">
            <Annotation active x="62%" y="38%" text="Select <b>Highlight regions</b>" />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>For this ingredient, we only need to select <b>Current monitor</b>. You can adjust how long
          it will highlight your regions by changing the number, but the default of 1 second seems good to me.</p>
        <p>Click <b>Save recipe</b> to immediately save the recipe.</p>
        
        <AnnotatedImage 
            src="/tutorial/recipes/highlight_regions.png" 
            alt="MaxTo's settings window showing the highlight reginos ingredient."
            caption="Set up the highlight regions ingredient.">
            <Annotation active x="57%" y="48%" text="Select <b>Current monitor</b>" />
            <Annotation active x="85%" y="80%"  text="Click <b>Save recipe</b>." />
        </AnnotatedImage>
    </li>
    
    <li>
        <p>You can now try out your recipe. Try hitting <Keys combination="Windows+Control+Z" /> a few times and see what happens.</p>
    </li>
</ol>

<h2>Learn more about recipes</h2>

<p>
    If you want to explore our recipes further, we have a lot of resources available. In the reference manual (see box below), you'll find chapter on 
    all the available triggers and ingredients.
</p>

<ArticleCard href="/reference" title="Reference manual" icon="book" articles={contents[2].children} color="danger" />


