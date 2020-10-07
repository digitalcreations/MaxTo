<script>
    import { Alert, Card, SectionList, SectionCard, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys, ArticleCard } from "../../components.js";
    import { mdiFrequentlyAskedQuestions } from '@mdi/js';

    import contents from '../../contents.js';
</script>

<svelte:head>
  <title>MaxTo how-tos</title>
</svelte:head>

<h1>When you are starting out with MaxTo, everything is new. These <b>how-to guides</b> are meant to help you accomplish some common scenarios.</h1>

<ArticleCard title="How do I...?" icon={mdiFrequentlyAskedQuestions} articles={contents[1].children} color="primary" />