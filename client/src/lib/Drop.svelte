<script>
    export let //
        selected,
        options = [];

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const handleChange = (e) => {
        dispatch("selected", selected);
    };
</script>

<select bind:value={selected} on:change={handleChange}>
    {#each options as question}
        <option value={question.value}>
            {question.label}
        </option>
    {/each}
</select>

<style>
    select {
        min-width: 200px;
        max-width: 50%;
    }
</style>
