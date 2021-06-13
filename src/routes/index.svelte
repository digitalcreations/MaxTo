<script>
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import { mdiMap, mdiFrequentlyAskedQuestions, mdiNotebook } from '@mdi/js';
    
    import contents from '$lib/contents.js';
  </script>
  
  <svelte:head>
    <title>MaxTo documentation</title>
  </svelte:head>
  
  <h1><b>Everything</b> you need to know about MaxTo. And some things you probably don't.</h1>
  
  <p>We've divided MaxTo's documentation into 3 separate sections, which you can navigate to quickly below.</p>
  
  <section>
    <ArticleCard href="/tutorial" linkText="Read the tutorial" title="Tutorial" icon={mdiMap} articles={contents[0].children} color="success" />
    <ArticleCard href="/how-to" linkText="Browse our how-to guides" title="How do I...?" icon={mdiFrequentlyAskedQuestions} articles={contents[1].children} color="primary" />
    <ArticleCard href="/reference" linkText="Read the reference manual" title="Reference manual" icon={mdiNotebook} articles={contents[2].children} color="danger" />
  </section>