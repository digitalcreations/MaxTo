<script>
  import { Alert, ArticleCard, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys } from "../components.js";
  
  import contents from '../contents.js';
</script>

<svelte:head>
  <title>MaxTo documentation</title>
</svelte:head>

<h1><b>Everything</b> you need to know about MaxTo. And some things you probably don't.</h1>

<p>We've divided MaxTo's documentation into 3 separate sections, which you can navigate to quickly below.</p>

<section>
  <ArticleCard href="/tutorial" title="Tutorial" icon="map" articles={contents[0].children} color="success" />
  <ArticleCard href="/how-to" title="How do I...?" icon="frequently-asked-questions" articles={contents[1].children} color="primary" />
  <ArticleCard href="/reference" title="Reference manual" icon="notebook" articles={contents[2].children} color="danger" />
</section>