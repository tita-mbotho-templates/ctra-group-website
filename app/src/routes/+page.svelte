<script lang="ts">
    import Header from "$lib/components/layout/Header.svelte";
    import Hero from "$lib/components/sections/Hero.svelte";
    import ServicesGrid from "$lib/components/sections/ServicesGrid.svelte";

    const whatsappNumber = ""; // TODO: set this, e.g. "27721234567" (no +)

    const services = [
        {
            key: "engineering",
            title: "Engineering",
            blurb: "On-site infrastructure support and coordinated maintenance.",
            description:
                "Engineering support for planned and reactive work across your site. We coordinate teams, manage timelines, and keep delivery predictable.",
            bullets: [
                "Planned + reactive maintenance",
                "Site coordination + supervision",
                "Reporting and documentation",
            ],
            imageUrl:
                "https://images.pexels.com/photos/7937365/pexels-photo-7937365.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7937365.jpg&fm=jpg",
        },
        {
            key: "electrical",
            title: "Electrical",
            blurb: "Installations, fault-finding, and compliance-ready work.",
            description:
                "Electrical services including troubleshooting, repairs, and installations. We prioritise safety, documentation, and reliable uptime.",
            bullets: [
                "Fault finding + repairs",
                "New installations",
                "Compliance-focused work",
            ],
            imageUrl:
                "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?cs=srgb&dl=pexels-pixabay-257700.jpg&fm=jpg",
        },
        {
            key: "cleaning",
            title: "Cleaning",
            blurb: "Commercial cleaning for offices, sites, and shared areas.",
            description:
                "Scheduled cleaning and deep-clean support to keep your environment safe and professional. We can tailor frequency and coverage by area.",
            bullets: [
                "Scheduled cleaning",
                "Deep cleans when needed",
                "Custom coverage by area",
            ],
            imageUrl:
                "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?cs=srgb&dl=pexels-cottonbro-studio-6195126.jpg&fm=jpg",
        },
        {
            key: "security",
            title: "Security",
            blurb: "Access control, guarding, and on-site security support.",
            description:
                "Security services focused on site access, visibility, and incident response. We align deployment to your operating hours and risk profile.",
            bullets: [
                "Access control support",
                "Visible guarding",
                "Incident response readiness",
            ],
            imageUrl:
                "https://images.pexels.com/photos/7714847/pexels-photo-7714847.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7714847.jpg&fm=jpg",
        },
        {
            key: "waste",
            title: "Waste Management",
            blurb: "Collection, handling, and site waste coordination.",
            description:
                "Waste handling and removal support to keep your site clean and compliant. We can coordinate bins, pickups, and responsible disposal.",
            bullets: [
                "Bins + pickups coordination",
                "Clean site standards",
                "Responsible disposal support",
            ],
            imageUrl:
                "https://images.pexels.com/photos/5591475/pexels-photo-5591475.jpeg?cs=srgb&dl=pexels-shvetsa-5591475.jpg&fm=jpg",
        },
        {
            key: "plant",
            title: "Plant Hire",
            blurb: "Equipment support for site work and heavy duty tasks.",
            description:
                "Plant hire options for site operations. Tell us what you need and we will align the right equipment and availability.",
            bullets: [
                "Equipment aligned to task",
                "Flexible hire options",
                "Availability planning",
            ],
            imageUrl:
                "https://images.pexels.com/photos/33444982/pexels-photo-33444982.jpeg?cs=srgb&dl=pexels-isabelle-taylor-33444982.jpg&fm=jpg",
        },
    ];
</script>

<Header />

<Hero
    heading="Integrated infrastructure and support services for your site"
    details="Engineering, electrical, cleaning, security, waste management, and plant hire. One group, coordinated delivery, reliable results."
    ctaText="Get a quote"
    ctaLink="/contact"
    img="/img/hero/hero-1.png"
/>

<ServicesGrid {services} {whatsappNumber} />
