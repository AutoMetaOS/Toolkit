<script>
    export let //
        content = {
            name: "",
            desc: "",
            status: "Active",
            image: "",
            url: "#",
        };
</script>

<a
    class:disabled={content.status === "disabled"}
    href={content.url}
    class="ƒ m20 p20 card"
>
    <div>
        <img class="m5 p5" src={content.image} alt="" />
    </div>
    <div>
        <div class="name m5 fw5">{content.name}</div>
        <span class="m5">{content.desc.sort().join(", ")}</span>
    </div>
</a>

<style type="text/scss">
    a {
        box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0);
        -moz-box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0);
        transition: box-shadow 0.2s ease;
        will-change: box-shadow;

        background: #fff;
        border-radius: 5px;
        width: 300px;
        border: 1px solid transparent;
        & img {
            width: 45px;
            height: 45px;
        }
        & .name {
            font-size: 1.25em;
        }
        &:hover:not(.disabled) {
            box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.2);
        }
    }
    .disabled {
        pointer-events: none;
        background: #ddd;
        color: #222;
    }
</style>
