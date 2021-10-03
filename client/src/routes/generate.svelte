<script>
    import { Button, Radio } from "$lib";
    import { onMount } from "svelte";

    let //
        gen_list = [],
        type = "Text";

    const options = [
        { label: "Text", value: "Text" },
        { label: "Image", value: "Image" },
    ];

    const handleClick = (e) => {
        cfetch("/generate/" + type).then((res) => {
            gen_list = [...gen_list, res.data];
        });
    };

    function copier(output, event) {
        const svg = event.target.parentElement.querySelector("svg");
        copyToClipboard(output);
        svg.setAttribute("fill", "#0f0");
        setTimeout(() => svg.setAttribute("fill", "#000"), 1000);
    }

    onMount(handleClick);
</script>

<div class="container">
    <span style="font-size:2em;">Generate</span> <br />
    <span>Just click to copy!</span>
    <p>
        <Radio {options} bind:selected={type} />
    </p>
    <Button on:click={handleClick}>Generate</Button>
    <article>
        {#each gen_list as item}
            <div class="rpm-5 item">
                {#if typeof item === "object"}
                    {#each Object.keys(item) as kp}
                        <div
                            class="p5 sub"
                            on:click={(event) => copier(item[kp], event)}
                        >
                            <svg
                                viewBox="0 0 488.3 488.3"
                                width="1em"
                                height="1em"
                            >
                                <path
                                    d="M314 85H87c-21 0-38 18-38 39v326c0 21 17 38 38 38h227c22 0 39-17 39-38V124c0-21-18-39-39-39zm12 365c0 6-5 11-12 11H87c-6 0-11-5-11-11V124c0-6 5-12 11-12h227c7 0 12 6 12 12v326z"
                                />
                                <path
                                    d="M401 0H174c-21 0-39 17-39 39 0 7 6 13 14 13s13-6 13-13 6-12 12-12h227c6 0 12 5 12 12v325c0 7-6 12-12 12-7 0-13 6-13 13s6 14 13 14c21 0 39-17 39-39V39c0-22-18-39-39-39z"
                                />
                            </svg>
                            &nbsp;
                            <span>{kp}:</span>
                            <i>{item[kp]}</i>
                        </div>
                    {/each}
                {:else}
                    <div
                        class="p5 sub"
                        on:click={(event) => copier(item, event)}
                    >
                        <svg viewBox="0 0 488.3 488.3" width="1em" height="1em">
                            <path
                                d="M314 85H87c-21 0-38 18-38 39v326c0 21 17 38 38 38h227c22 0 39-17 39-38V124c0-21-18-39-39-39zm12 365c0 6-5 11-12 11H87c-6 0-11-5-11-11V124c0-6 5-12 11-12h227c7 0 12 6 12 12v326z"
                            />
                            <path
                                d="M401 0H174c-21 0-39 17-39 39 0 7 6 13 14 13s13-6 13-13 6-12 12-12h227c6 0 12 5 12 12v325c0 7-6 12-12 12-7 0-13 6-13 13s6 14 13 14c21 0 39-17 39-39V39c0-22-18-39-39-39z"
                            />
                        </svg>
                        <span>{item}</span> <br />
                        <img src={item} alt="placeholder_image" />
                    </div>
                {/if}
            </div>
        {/each}
    </article>
</div>

<style type="text/scss">
    .sub {
        cursor: pointer;
        svg {
            opacity: 0.1;
        }
        &:hover {
            svg {
                opacity: 1;
            }
        }
    }
    .item {
        background: #fff;
    }
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
