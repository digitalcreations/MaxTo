<script>
export let caption;
export let src;
export let alt;
</script>

<figure>
    <figcaption>{caption}</figcaption>
    <img {src} {alt} />
    
    <slot></slot>
</figure>