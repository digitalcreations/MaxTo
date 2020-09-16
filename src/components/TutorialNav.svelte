<script>
    import ArticleCard from './ArticleCard.svelte';
    import Card from './Card.svelte';
    import Icon from './Icon.svelte';
    import Badge from './Badge.svelte';
    import MoreLink from './MoreLink.svelte';

    import contents from '../contents.js';
    
    import { stores } from '@sapper/app';
    
    const { page } = stores();
    
    export let sectionNumber = 0;
    
    $: next = contents[sectionNumber].children[contents[sectionNumber].children.findIndex(p => p.href == $page.path) + 1];
</script>

<style>
    nav {
        display: flex;
    }
    
    article { flex: 1; margin-right: calc(0.5 * var(--padding-medium)); }
    aside { flex: 1; margin-left: calc(0.5 * var(--padding-medium)) }

    stack {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    figure {
        background: var(--color-primary);
        display: block;
        padding: var(--padding-large);
        border-radius: 50%;
    }
    
    h2 {
        margin: 0;
        text-align: center;
        display: block;
    }
   
    figure :global(svg path) 
    {
        fill: white;
    }
</style>

{#if !!next}
<nav>
    <article>
        <Card type="stacked">
            <div slot="badge"><Badge text="Up next" color="primary" /></div>
            <stack>
                <figure>
                    <Icon name={next.icon} size=large />
                </figure>
                
                <h2>{next.title}</h2>
                
                <p>{next.text}</p>
                
                <p><MoreLink href={next.href} /></p>
            </stack>
        </Card>
    </article>
    
    <aside>
        <ArticleCard href="/tutorial" title="Tutorial" icon="map" articles={contents[0].children} color="success" />
    </aside>
</nav>
{/if}