<script lang="ts">
    export let heading = "About us";
    export let intro = "";
    export let body: string[] = [];
    export let imageUrl = "";
</script>

<section class="margin6">
    <section class="center">
        <h2>{heading}</h2>
        <p>{intro}</p>
    </section>

    <section class="content">
        <div class="grid">
            <div class="copy">
                {#each body as para, i (i)}
                    <p>{para}</p>
                {/each}
            </div>

            <div class="media">
                <img src={imageUrl} alt="Team" loading="lazy" />
            </div>
        </div>
    </section>
</section>

<style>
    /* Match Benefits spacing exactly */
    .content {
        margin-top: var(--spacing4);
    }

    .grid {
        display: grid;
        gap: var(--spacing5);
        grid-template-columns: 1fr 1fr;
        align-items: start;
    }

    /* No @media: becomes 1-2 cols naturally */
    @supports (grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))) {
        .grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
    }

    .copy p {
        margin: 0 0 var(--spacing3) 0;
        opacity: 0.95;
        max-width: 70ch;
    }

    .media img {
        width: 100%;
        height: 100%;
        max-height: 360px;
        object-fit: cover;
        display: block;
        border-radius: var(--spacing2);
        border-bottom: solid var(--spacing1) var(--accent);
    }
</style>
