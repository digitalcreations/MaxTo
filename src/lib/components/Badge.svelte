<script>
export let text;
export let color = "default";
</script>

<style>
span {
    background: var(--color-default);
    border-radius: 0.25rem;
    letter-spacing: 0.05em;
    padding: .5rem 1rem;
    text-transform: uppercase;
    font-size: .75rem;
    color: white;
    font-weight: 600;
    line-height: 1rem;
}

span.primary { background-color: var(--color-primary); }
span.success { background-color: var(--color-success); }
span.warning { background-color: var(--color-warning); }
span.danger { background-color: var(--color-danger); }
</style>

<span 
    class:primary={color == 'primary'}
    class:success={color == 'success'}
    class:warning={color == 'warning'}
    class:danger={color == 'danger'}>{text}</span>