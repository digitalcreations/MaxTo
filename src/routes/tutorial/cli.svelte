<script>
import { Code, Badge, Link, Alert, LinkList, LinkListItem, AnnotatedImage, Annotation, Accordion, AccordionItem, ArticleCard, CommandExample } from '../../components.js';
import { mdiConsole } from '@mdi/js';
</script>

<svelte:head>
    <title>Command line - MaxTo tutorial</title> 
</svelte:head>

<h1>MaxTo can be used very effectively from the <b>command line</b>. Here is how you get started.</h1>

<p>
    There are many reasons you may want to use MaxTo from the command line, but for most people
    the answer is automation. You will be able to put MaxTo commands into batch scripts, e.g.
    start a program and place it where you want it.
</p>

<p>
    The MaxTo command-line (CLI) app works from both PowerShell and Command Prompt
</p>

<AnnotatedImage 
    src="/tutorial/cli/cli_help.png" 
    alt="Illustration showing MaxTo CLI in PowerShell."
    caption="Running maxto without parameters shows you all the commands.">
    <Annotation active x="32%" y="16%"  text="I typed <b>maxto</b>" />
</AnnotatedImage>

<p>
    One of the cool things when using MaxTo's CLI, all the ingredients that are available
    in recipes, are also available on the command line. Also, there are some commands that are only 
    available from the command line; typically commands that only query for values.
</p>

<p>
    Here is how you move the current window (i.e. the terminal window) into the region to the right.
</p>

<CommandExample category=window name=move parameters={{ direction: "Right" }} />

<p>
    If you are curious about a command, you can type: <Code icon={mdiConsole}>maxto help ui open</Code> to see what parameters it expects:
</p>

<AnnotatedImage 
    src="/tutorial/cli/cli_help_detail.png" 
    alt="Illustration showing MaxTo CLI help in PowerShell."
    caption="You can explore the commands you are curious about in detail.">
    <Annotation active x="40%" y="13%"  text="I typed this" />
</AnnotatedImage>

<h2>Starting and stopping MaxTo</h2>

<p>
    There are 3 additional commands available that you cannot run from recipes; which lets you start, stop and restart MaxTo.
</p>

<Accordion collapsible={false}>
    <AccordionItem title="Start MaxTo">
        <Code icon={mdiConsole}>maxto service start</Code>
    </AccordionItem>
    
    <AccordionItem title="Stop MaxTo">
        <Code icon={mdiConsole}>maxto service stop</Code>
    </AccordionItem>
    
    <AccordionItem title="Restart MaxTo">
        <Code icon={mdiConsole}>maxto service restart</Code>
    </AccordionItem>
</Accordion>