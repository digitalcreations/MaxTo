<script>
  import { Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys } from "../../components.js";
</script>

<svelte:head>
  <title>Join multiple monitors into one - MaxTo how-tos</title>
</svelte:head>

<h1><b>Joining multiple monitors into one</b> is not something MaxTo can do by itself, but most video card drivers support it.</h1>

<p>
  This guide will therefore focus on how you do this for the three largest video card manufacturers.
</p>

<Alert kind="warning">
    <h3>Important note</h3>
    
    <p>
        To get this to work, all the monitors you combine will need to have the same resolution.
    </p>    
</Alert>

<Alert kind="info">
    <h3>Do you want regions spanning multiple monitors?</h3>
    <p>
        This is the how-to guide for you. MaxTo's regions cannot span multiple monitors unless the video card
        driver tells Windows that they are really one larger monitor.
    </p>
    
    <p>
        This how-to is also particularly relevant for anyone with an ultra-wide that is being driven using two
        video cables and a Picture-by-Picture (PBP) mode.
    </p>
</Alert>

<p>
    Please find your video card manufacturer in the list below and follow the instructions.
</p>

<Accordion>

    <AccordionItem title="NVIDIA Surround">
        <ol>
            <li><p>Ensure all monitors are connected and working.</p></li>
            <li><p>Open NVIDIA Control Panel (right click on your desktop background, choose <b>NVIDIA Control Panel</b>).</p></li>
            <li><p>In the treeview on the left, select <b>Configure Surround, PhysX</b> (under <b>3D Settings</b>).</p></li>
            <li><p>Check the <b>Span displays with Surround</b> checkbox, and then click <b>Configure</b>.</p></li>
            <li><p>Follow the on-screen setup to set up your displays the way you want them.</p></li>
            <li><p>Your displays are now connected and you can configure your MaxTo regions to match.</p></li>
        </ol>
        
        <p>
            For more information, please see <Link href="https://www.nvidia.com/content/Control-Panel-Help/vLatest/en-us/mergedProjects/nv3d/To_configure_my_displays_for_Surround.htm">NVIDIA Control Panel help</Link>.
        </p>
    </AccordionItem>
    
    <AccordionItem title="AMD Eyefinity">
        <p>
            AMD Eyefinity can create a display group (maximum 1 per graphics card) that contains multiple monitors to be joined.
        </p>
    
        <ol>
            <li><p>Ensure all monitors are connected and working.</p></li>
            <li><p>Open AMD Radeon Settings (right click on your desktop background, choose <b>AMD Radeon Settings</b>).</p></li>
            <li><p>Click the <b>Eyefinity</b> tab near the top right.</p></li>
            <li><p>Click the <b>Quick setup</b> button. This will attempt to create a display group based on the current layout of your monitors.</p></li>
            <li><p>If the display group is created incorrectly, you can use the <b>Arrange displays</b> button to re-arrange the monitors' relative position.</p></li>
            <li><p>Your displays should now be set up correctly and you can configure your MaxTo regions to match.</p></li>
        </ol>
        
        <p>
            For more information, please see <Link href="https://www.amd.com/en/support/kb/faq/dh-014">AMD Eyefinity help</Link>. 
        </p>
    </AccordionItem>
    
    <AccordionItem title="Intel Combined Desktop">
        <p>
            Intel's Combined Desktop (formerly Collage Mode) can join up to 3 displays (4 with an external DisplayPort splitter) into a single display.
        </p>
        
        <ol>
            <li><p>Ensure all monitors are connected and working.</p></li>
            <li><p>Press <Keys combination="Control+Alt+F12" /> to open Intel Graphics Control Panel.</p></li>
            <li><p>Click the <b>Display</b> dropdown near the top of the window, and select <b>Multiple displays</b>.</p></li>
            <li><p>Under <b>Select Display Mode</b> on the left, click <b>Collage</b>, and ensure <b>On</b> is selected under <b>Enable collage</b>.</p></li>
            <li><p>Select the displays you want to use under <b>Select Active Displays</b>.</p></li>
            <li><p>Select the orientation of your displays under <b>Arrange Displays</b>.</p></li>
            <li><p>Click <b>Apply</b>.</p></li>
            <li><p>In the <b>Display</b> dropdown, select <b>Resolution</b>, and pick the resolution you want.</p></li>
            <li><p>Click <b>Apply</b>.</p></li>
            <li><p>Your displays should now be set up correctly and you can configure your MaxTo regions to match.</p></li>
        </ol>
        
        <p>
            For more information, please see <Link href="https://www.intel.com/content/www/us/en/support/articles/000006547/graphics.html">Intel's Frequently Asked Questions</Link>.
        </p>
    </AccordionItem>
</Accordion>