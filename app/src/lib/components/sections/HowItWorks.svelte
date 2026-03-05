<script context="module" lang="ts">
    export type HowStep = {
        key: string;
        title: string;
        blurb: string;
    };
</script>

<script lang="ts">
    export let heading = "How it works";
    export let intro =
        "A simple process that keeps delivery clear from first contact to ongoing support.";

    export let steps: HowStep[] = [
        {
            key: "choose",
            title: "Choose a service",
            blurb: "Pick what you need (or mix services). Open details and confirm scope.",
        },
        {
            key: "enquire",
            title: "Send a WhatsApp enquiry",
            blurb: "Tap 'Connect with our experts' to message us about the selected service.",
        },
        {
            key: "confirm",
            title: "Confirm scope and schedule",
            blurb: "We align requirements, timelines, access, and safety/compliance needs.",
        },
        {
            key: "deliver",
            title: "Delivery and follow-through",
            blurb: "Work gets done, updates are shared, and the site stays supported.",
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
            {#each steps as s, idx (s.key)}
                <article class="card">
                    <div class="badge" aria-label={`Step ${idx + 1}`}>
                        {idx + 1}
                    </div>

                    <div class="copy">
                        <h3>{s.title}</h3>
                        <p>{s.blurb}</p>
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
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @supports (grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))) {
        .grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        padding: 0 var(--spacing2);
        border-radius: var(--spacing2);
        background: var(--color90);
        border-bottom: solid var(--spacing1) var(--accent);
        font: 600 1rem/1 var(--ff2);
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
