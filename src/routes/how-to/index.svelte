<script>
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import { mdiFrequentlyAskedQuestions } from '@mdi/js';

    import contents from '$lib/contents.js';
</script>

<svelte:head>
  <title>MaxTo how-tos</title>
</svelte:head>

<h1>When you are starting out with MaxTo, everything is new. These <b>how-to guides</b> are meant to help you accomplish some common scenarios.</h1>

<ArticleCard title="How do I...?" icon={mdiFrequentlyAskedQuestions} articles={contents[1].children} color="primary" />