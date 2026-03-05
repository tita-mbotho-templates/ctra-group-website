<script lang="ts">
    export let heading = "";
    export let details = "";
    export let ctaText = "";
    export let ctaLink = "#";
    export let img = "";
</script>

<section class="flex margin6">
    <div>
        <h1>{heading}</h1>
        <p>{details}</p>
        <a class="btn" href={ctaLink}>{ctaText}</a>
    </div>

    <img src={img} alt="" />
</section>

<style>
    h1 {
        font: var(--h1);
    }

    p {
        margin: var(--spacing2) 0;
    }
</style>
