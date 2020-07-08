<script>
export let caption;
export let src;
export let alt;
</script>

<figure>
    <img {src} {alt} />
    
    <figcaption>{caption}</figcaption>
    
    <slot></slot>
</figure>