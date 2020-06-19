<script>
import Carousel from '@beyonk/svelte-carousel';
import Icon from './Icon.svelte';
</script>

<style>
.control {
    display: block;
    background: white;
    border-radius: 100%;
    border: 1px solid var(--color-box-border);
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition:  border-color 0.25s ease-out;
}

.control:hover {
    border-color: var(--color-primary);
}

:global(button.right) {
    right: 0 !important;
}

:global(button.left) {
    left: -2.5rem !important;
}
</style>

<Carousel perPage=1 loop=false>
    <span class="control" slot="left-control">
        <Icon set="light" name="chevron-left" />
    </span>

    <slot />

    <span class="control" slot="right-control">
        <Icon set="regular" name="chevron-right" />
    </span>
</Carousel>