<script lang="ts">
    type Benefit = {
        key: string;
        title: string;
        blurb: string;
        iconPath: string;
    };

    export let heading = "Benefits";
    export let intro =
        "Practical advantages that make delivery predictable, safe, and easier to manage.";

    export let benefits: Benefit[] = [
        {
            key: "single-provider",
            title: "Single provider, coordinated delivery",
            blurb: "One team to manage multiple services - fewer handovers and faster turnaround.",
            iconPath: "/img/icons/benefits-coordination.svg",
        },
        {
            key: "reliable-uptime",
            title: "Reliable uptime and response",
            blurb: "Planned maintenance and reactive support designed around your site's needs.",
            iconPath: "/img/icons/benefits-uptime.svg",
        },
        {
            key: "safety-compliance",
            title: "Safety and compliance first",
            blurb: "Documentation-ready work with practical processes that reduce risk on site.",
            iconPath: "/img/icons/benefits-safety.svg",
        },
        {
            key: "clear-communication",
            title: "Clear communication",
            blurb: "Better updates, fewer surprises, and alignment across stakeholders.",
            iconPath: "/img/icons/benefits-communication.svg",
        },
        {
            key: "scalable",
            title: "Scales with your operations",
            blurb: "Add services or increase coverage as your site grows - without reworking everything.",
            iconPath: "/img/icons/benefits-scale.svg",
        },
        {
            key: "cost-control",
            title: "Better cost control",
            blurb: "Less duplication, smarter scheduling, and clearer visibility over what you're paying for.",
            iconPath: "/img/icons/benefits-cost.svg",
        },
    ];
</script>

<section class="margin6">
    <section class="center">
        <h1>{heading}</h1>
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
