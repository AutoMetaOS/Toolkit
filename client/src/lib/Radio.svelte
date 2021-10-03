<script>
    export let //
        options = [],
        selected;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const handleChange = (e) => {
        dispatch("selected", { selected });
    };
</script>

<div on:change={handleChange}>
    {#each options as option}
        <label class="p5 m5 rx5" checked={selected === option.value}>
            <input
                type="radio"
                bind:group={selected}
                name="options"
                value={option.value}
            />
            {option.label}
        </label>
    {/each}
</div>

<style type="text/scss">
    $theme: #55b;
    label {
        transition: all 0.2s ease;
        border-radius: 5px;
        border: 1px solid transparent;
        &[checked="true"] {
            background: $theme;
            color: #fff;
        }
        &:hover {
            border: 1px solid $theme;
        }
    }
</style>
