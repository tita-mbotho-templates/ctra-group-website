<script lang="ts">
    export let heading = "Ready to get started?";
    export let details =
        "Tell us what you need and we will confirm scope, timelines, and the next steps.";
    export let buttonText = "Contact us on WhatsApp";
    export let whatsappNumber = ""; // e.g. "27721234567" (no +)
    export let message =
        "Hi, I'd like to request a quote. Please share pricing/availability and the next steps.";

    function whatsappHref() {
        const num = (whatsappNumber || "").replace(/[^\d]/g, "");
        const text = message || "";

        if (!num) return `https://wa.me/?text=${encodeURIComponent(text)}`;
        return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
    }
</script>

<section class="margin6">
    <section class="box">
        <div class="copy">
            <h2>{heading}</h2>
            <p>{details}</p>
        </div>

        <div class="actions">
            <a
                class="btn"
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
            >
                {buttonText}
            </a>
        </div>
    </section>
</section>

<style>
    .box {
        background: var(--accent);
        border-radius: var(--spacing2);
        padding: var(--spacing5);
        border-bottom: solid var(--spacing1) var(--color30);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing4);
        flex-wrap: wrap;
    }

    .copy {
        flex: 1;
        min-width: 280px;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        flex: 0 0 auto;
    }

    h2 {
        margin: 0 0 var(--spacing2) 0;
    }

    p {
        margin: 0;
        opacity: 0.95;
        max-width: 70ch;
    }
</style>
