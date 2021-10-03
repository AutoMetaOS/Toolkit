<script>
    import { TextBox, Button, Radio } from "$lib";

    let //
        input,
        type = "css",
        copy = "Copy!",
        output = "";

    const options = [
        { label: "HTML", value: "html" },
        { label: "CSS", value: "css" },
        { label: "JS", value: "js" },
        { label: "JSON", value: "json" },
    ];

    const handleChange = (e) => (input = e.detail.text);

    const handleClick = (e) =>
        cfetch("/minify/" + type, input).then((res) => (output = res.data));

    function copier() {
        copy = "Copying...";
        copyToClipboard(output);
        copy = "Copyied!";
        setTimeout(() => (copy = "Copy!"), 1000);
    }
</script>

<div class="container">
    <span style="font-size:2em;"> MINIFY </span>
    <p>
        <Radio {options} bind:selected={type} />
    </p>
    <TextBox name="Input" on:change={handleChange} />
    <Button on:click={handleClick}>Minify</Button>
    <TextBox name="Output" text={output} />
    <Button on:click={copier}>{copy}</Button>
</div>

<style>
    .container {
        margin: 0 auto;
        width: 50%;
    }
    @media (max-width: 600px) {
        .container {
            width: 100%;
        }
    }
</style>
