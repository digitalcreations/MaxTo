<script>
import { onMount } from 'svelte';

export let icon;

/**
 * Adapted from Sam Clarke: https://www.samclarke.com/javascript-is-font-available/
 */
function isFontAvailable(font) {
    var width;
    var body = document.body;

    var container = document.createElement('span');
    container.innerHTML = Array(100).join('');
    container.style.cssText = [
        'position:absolute',
        'width:auto',
        'font-size:128px',
        'left:-99999px'
    ].join(' !important;');
    
    function getWidth(fontFamily) {
        container.style.fontFamily = fontFamily;

        body.appendChild(container);
        width = container.clientWidth;
        body.removeChild(container);

        return width;
    }
    
    var monoWidth  = getWidth('monospace');
    var serifWidth = getWidth('serif');
    var sansWidth  = getWidth('sans-serif');

    return monoWidth !== getWidth(font + ',monospace') ||
        sansWidth !== getWidth(font + ',sans-serif') ||
        serifWidth !== getWidth(font + ',serif');
}

let visible = false;
onMount(() => visible = isFontAvailable('Segoe MDL2 Assets'));
</script>

<style>
span {
    display: inline-block;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-family: 'Segoe MDL2 Assets';
    margin-right: 1rem;
    background: var(--color-box-border);
    color: var(--color-dark);
}
</style>

{#if visible && icon}
<span>{@html '&#' + icon + ';'}</span>
{/if}
