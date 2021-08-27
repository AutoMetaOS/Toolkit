<script>
    import { TextBox, Button } from "$lib";

    let //
        input,
        output = "";

    const handleChange = (e) => {
        input = e.detail.text;
    };

    const handleClick = (e) => {
        CALL("/minify/css", input).then((res) => {
            output = res;
            console.log(output);
        });
    };
</script>

<div class="container">
    <p>
        <span style="font-size:2em;"> MINIFY: </span>
        <part>
            {#each ["CSS", "HTML", "JS", "JSON"] as condition}
                <input
                    type="radio"
                    id={condition}
                    name="selector"
                    value={condition}
                />
                <label for={condition}>{condition}</label>
            {/each}
        </part>
    </p>
    <TextBox name="Input" on:change={handleChange} />
    <Button on:click={handleClick}>Minify</Button>
    <TextBox name="Output" text={output} />
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
