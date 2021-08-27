<script>
    export let //
        text,
        name;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function update() {
        dispatch("change", { text });
    }
</script>

<fieldset class="p20 m0">
    <legend>{name}</legend>
    <textarea
        class="p0 m0 w-100"
        placeholder="Code Here!"
        on:keyup={update}
        cols="30"
        rows="10"
        bind:value={text}
    />
</fieldset>

<style>
    fieldset {
        border: 1px solid #8884;
        background: #fff;
        border-radius: 10px;
    }
    textarea {
        width: auto;
    }
</style>
