<script lang="ts">
    import Header from "$lib/components/layout/Header.svelte";
    import Hero from "$lib/components/sections/Hero.svelte";
    import ServicesGrid from "$lib/components/sections/ServicesGrid.svelte";
    import Benefits from "$lib/components/sections/Benefits.svelte";
    import HowItWorks from "$lib/components/sections/HowItWorks.svelte";

    import {
        WHATSAPP_NUMBER,
        HERO,
        SERVICES,
        BENEFITS_SECTION,
        BENEFITS,
        HOW_IT_WORKS_SECTION,
        HOW_IT_WORKS_STEPS,
    } from "$lib/config/site";
</script>

<Header />

<Hero
    heading={HERO.heading}
    details={HERO.details}
    ctaText={HERO.ctaText}
    ctaLink={HERO.ctaLink}
    img={HERO.img}
/>

<ServicesGrid services={SERVICES} whatsappNumber={WHATSAPP_NUMBER} />

<Benefits
    heading={BENEFITS_SECTION.heading}
    intro={BENEFITS_SECTION.intro}
    benefits={BENEFITS}
/>

<HowItWorks
    heading={HOW_IT_WORKS_SECTION.heading}
    intro={HOW_IT_WORKS_SECTION.intro}
    steps={HOW_IT_WORKS_STEPS}
/>
