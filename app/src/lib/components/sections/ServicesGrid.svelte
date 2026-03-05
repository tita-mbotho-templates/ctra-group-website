<script lang="ts">
    type Service = {
        key: string;
        title: string;
        blurb: string;
        description: string;
        bullets: string[];
        imageUrl: string;
    };

    export let whatsappNumber = ""; // e.g. "27721234567" (no +)
    export let services: Service[] = [];

    let active: Service | null = null;

    function openModal(service: Service) {
        active = service;
        document.documentElement.style.overflow = "hidden";
    }

    function closeModal() {
        active = null;
        document.documentElement.style.overflow = "";
    }

    function onBackdropClick(e: MouseEvent) {
        if (e.target === e.currentTarget) closeModal();
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === "Escape") closeModal();
    }

    function whatsappHref(service: Service) {
        const num = (whatsappNumber || "").replace(/[^\d]/g, "");
        const text =
            `Hi, I'd like to enquire about: ${service.title}. ` +
            `Please share pricing/availability and the next steps.`;

        if (!num) return `https://wa.me/?text=${encodeURIComponent(text)}`;
        return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
    }
</script>

<section class="margin6">
    <div class="center">
        <h1>Services</h1>
        <p>Choose a service to learn more and contact us on WhatsApp.</p>
    </div>

    <div class="grid">
        {#each services as s (s.key)}
            <article class="card">
                <div class="row media">
                    <img src={s.imageUrl} alt="" loading="lazy" />
                </div>

                <div class="row copy">
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                </div>

                <div class="row actions">
                    <button
                        type="button"
                        class="btn"
                        on:click={() => openModal(s)}
                    >
                        Learn more
                    </button>
                </div>
            </article>
        {/each}
    </div>
</section>

{#if active}
    <div
        class="modal-backdrop"
        role="presentation"
        tabindex="-1"
        on:click={onBackdropClick}
        on:keydown={onKeydown}
    >
        <div
            class="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} details`}
        >
            <div class="modal-top">
                <h3>{active.title}</h3>
                <button
                    type="button"
                    class="icon-btn"
                    on:click={closeModal}
                    aria-label="Close"
                >
                    ×
                </button>
            </div>

            <div class="modal-row desc">
                <p>{active.description}</p>
            </div>

            <div class="modal-row bullets">
                <ul>
                    {#each active.bullets as b, i (i)}
                        <li>{b}</li>
                    {/each}
                </ul>
            </div>

            <div class="modal-row modal-actions">
                <a
                    class="btn"
                    href={whatsappHref(active)}
                    target="_blank"
                    rel="noreferrer"
                >
                    Connect with our experts
                </a>
            </div>
        </div>
    </div>
{/if}

<style>
    .grid {
        margin-top: var(--spacing4);
        display: grid;
        gap: var(--spacing4);
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    /* keep 3 cols on wide screens, shrink gracefully without @media */
    @supports (grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))) {
        .grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
    }

    .card {
        background: var(--color100);
        border-radius: var(--spacing2);
        border-bottom: solid var(--spacing1) var(--accent);
        overflow: hidden;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    .row {
        padding: var(--spacing4);
    }

    .row.media {
        padding: 0;
    }

    .row.media img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        display: block;
    }

    .row.copy h3 {
        margin: 0 0 var(--spacing2) 0;
        font: 600 1.25rem/1.2em var(--ff2);
    }

    .row.copy p {
        margin: 0;
        opacity: 0.9;
    }

    .row.actions {
        display: flex;
        justify-content: flex-end;
        padding-top: 0;
    }

    /* Modal overlay + blur */
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing4);
        z-index: 50;
    }

    /* A more normal, "industry" modal size */
    .modal {
        width: min(640px, 100%);
        max-height: calc(100vh - (var(--spacing4) * 2));
        overflow: auto;
        background: var(--color90);
        color: var(--color10);
        border-radius: var(--spacing2);
        padding: var(--spacing4);
        border-bottom: solid var(--spacing1) var(--accent);
    }

    .modal-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing3);
        margin-bottom: var(--spacing3);
    }

    .icon-btn {
        all: unset;
        cursor: pointer;
        font: 600 1.5rem/1 var(--ff2);
        padding: var(--spacing1) var(--spacing2);
        border-radius: var(--spacing2);
        background: var(--color100);
        border-bottom: solid var(--spacing1) var(--accent);
    }

    .modal-row {
        margin-top: var(--spacing3);
    }

    .bullets ul {
        margin: 0;
        padding-left: 1.2rem;
    }

    .bullets li {
        margin: var(--spacing2) 0;
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
    }
</style>
