<script>
import Icon from 'mdi-svelte';
import { mdiInformationOutline, mdiAlertCircleOutline, mdiCheckCircleOutline, mdiAlert } from '@mdi/js';

export let icon = null;
export let kind = 'default';

const iconMap = {
    info: mdiInformationOutline,
    warning: mdiAlertCircleOutline,
    success: mdiCheckCircleOutline,
    danger: mdiAlert
};

$: selectedIcon = icon || iconMap[kind];
</script>

<style>
section {
    margin: var(--padding-large) 0;
    padding: var(--padding-large);
    position: relative;
    overflow: hidden;
    background: white;
    border: 1px solid var(--color-box-border);
    border-radius: var(--border-radius);
}

section :global(hr) {
    border: 0;
    border-bottom: 1px solid rgba(0,0,0,.25);
}

section.success {
    background: var(--color-success-background);
    border-color: var(--color-success-border);
}
section.warning {
    background: var(--color-warning-background);
    border-color: var(--color-warning-border);
}
section.info {
    background: var(--color-info-background);
    border-color: var(--color-info-border);

    --step-background-1: rgba(0,0,0,0.05);
	--step-color-1: black;
	--step-background-2: rgba(0,0,0,0.05);
	--step-border-2: rgba(0,0,0,0.05);
	--step-color-2: black;
}
section.danger {
    background: var(--color-danger-background);
    border-color: var(--color-danger-border);
}


.icon :global(svg) {
    position: absolute;
    top: -2rem;
    left: -2rem;
}

@media(max-width: 768px) {
    :global(h2) {
        margin: 0 0 0 0;
        line-height: 1.4em;
    }
}
</style>

<section class="alert" class:warning={kind == 'warning'} class:info={kind == 'info'} class:danger={kind == 'danger'} class:success={kind == 'success'}>
    <div class="icon"><Icon path={selectedIcon} size="10rem" color="rgba(0,0,0,0.05)" /></div>

    <slot></slot>
</section>