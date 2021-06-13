<script>
export let text;
export let x = "50%";
export let y = "50%";
export let active = false;
export let reverse = false;
</script>

<style>
span {
    --position-x: 50%;
    --position-y: 50%;
    display: block;
    position: absolute;
    max-width: 25%;
    background: white;
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    left: var(--position-x);
    top: var(--position-y);
    padding: var(--padding-small);
}

span.active::before {
    animation: knock 2s infinite;
}

span:before, span:after {
    position: absolute;
    display: block;
    content: '';
}

span::before {
    z-index: 2;
    left: calc(var(--padding-small) - 30px);
    background: var(--color-primary);
    width: 8px;
    height: 8px;
    top: calc(50% - 4px);
    border-radius: 50%;
}
span::after {
    z-index: 1;
    left: calc(var(--padding-small) - 30px);
    top: calc(50% - 1px);
    height: 2px;
    width: 20px;
    background: var(--color-primary);
}

@keyframes knock {
    from { transform: scale(1); }
    10% { transform: scale(1.25); }
    20% { transform: scale(1); }
    30% { transform: scale(1.25); }
    to { transform: scale(1); }
}
</style>

<span style="--position-x: {x}; --position-y: {y};" class:active class:reverse>
{@html text}
</span>