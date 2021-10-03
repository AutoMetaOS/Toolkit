<script>
    import { TextBox, Button, Drop } from "$lib";

    let //
        input,
        type = "Base64/Text",
        copy = "Copy!",
        output = "";

    const options = [
        { label: "Base64/Text", value: "Base64/Text" },
        { label: "CSS", value: "css" },
        { label: "JS", value: "js" },
        { label: "JSON", value: "json" },
    ];

    let [from, to] = options.find((e) => e.label === type).label.split("/");

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
    <span style="font-size:2em;">Encode</span>
    <div>
        <span>Choose Pair</span> <br />
        <Drop {options} bind:selected={type} />
    </div>

    <TextBox name={from} on:change={handleChange} />
    <Button on:click={handleClick}>Encode</Button>
    <TextBox name={to} text={output} />
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
