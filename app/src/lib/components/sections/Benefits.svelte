<script context="module" lang="ts">
    export type Benefit = {
        key: string;
        title: string;
        blurb: string;
        iconPath: string;
    };
</script>

<script lang="ts">
    export let heading = "Benefits";
    export let intro = "";
    export let benefits: Benefit[] = [];
</script>

<section class="margin6">
    <section class="center">
        <h2>{heading}</h2>
        <p>{intro}</p>
    </section>

    <section class="cards">
        <div class="grid">
            {#each benefits as b (b.key)}
                <article class="card">
                    <div class="icon">
                        <img src={b.iconPath} alt="" loading="lazy" />
                    </div>

                    <div class="copy">
                        <h3>{b.title}</h3>
                        <p>{b.blurb}</p>
                    </div>
                </article>
            {/each}
        </div>
    </section>
</section>

<style>
    .cards {
        margin-top: var(--spacing4);
    }

    .grid {
        display: grid;
        gap: var(--spacing4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @supports (grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))) {
        .grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
    }

    .card {
        background: var(--color100);
        border-radius: var(--spacing2);
        padding: var(--spacing4);
        border-bottom: solid var(--spacing1) var(--accent);
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--spacing3);
        align-items: start;
        height: 100%;
    }

    .icon img {
        width: 44px;
        height: 44px;
        display: block;
    }

    h3 {
        margin: 0 0 var(--spacing2) 0;
        font: 600 1.25rem/1.2em var(--ff2);
    }

    p {
        margin: 0;
        opacity: 0.95;
    }
</style>
