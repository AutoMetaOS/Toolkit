<script>
    export let flat = 0;
</script>

<button class="p5 m5" class:min={flat} on:click>
    <slot />
</button>

<style type="text/scss">
    button {
        cursor: pointer;
        background: #55b;
        border-radius: 5px;
        color: #fff;
        &:hover {
            transform: scale(1.05);
        }
    }
    .min {
        background: none;
        color: #000;
    }
</style>
