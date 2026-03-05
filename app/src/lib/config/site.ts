// app/src/lib/config/site.ts

export type Service = {
    key: string;
    title: string;
    blurb: string;
    description: string;
    bullets: string[];
    imageUrl: string;
};

export type Benefit = {
    key: string;
    title: string;
    blurb: string;
    iconPath: string;
};

export type HowStep = {
    key: string;
    title: string;
    blurb: string;
};

export type AboutStat = { key: string; label: string; value: string };
export type AboutValue = { key: string; title: string; blurb: string };

export type AboutSection = {
    heading: string;
    intro: string;
    body: string[];
    imageUrl: string;
};

export const WHATSAPP_NUMBER = ""; // e.g. "27721234567" (no +)

/** HERO */
export const HERO: {
    heading: string;
    details: string;
    ctaText: string;
    ctaLink: string;
    img: string;
} = {
    heading: "Integrated infrastructure and support services for your site",
    details:
        "Engineering, electrical, cleaning, security, waste management, and plant hire. One group, coordinated delivery, reliable results.",
    ctaText: "Get a quote",
    ctaLink: "/contact",
    img: "/img/hero/hero-1.png",
};

/** SERVICES */
export const SERVICES: Service[] = [
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
        bullets: ["Fault finding + repairs", "New installations", "Compliance-focused work"],
        imageUrl:
            "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?cs=srgb&dl=pexels-pixabay-257700.jpg&fm=jpg",
    },
    {
        key: "cleaning",
        title: "Cleaning",
        blurb: "Commercial cleaning for offices, sites, and shared areas.",
        description:
            "Scheduled cleaning and deep-clean support to keep your environment safe and professional. We can tailor frequency and coverage by area.",
        bullets: ["Scheduled cleaning", "Deep cleans when needed", "Custom coverage by area"],
        imageUrl:
            "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?cs=srgb&dl=pexels-cottonbro-studio-6195126.jpg&fm=jpg",
    },
    {
        key: "security",
        title: "Security",
        blurb: "Access control, guarding, and on-site security support.",
        description:
            "Security services focused on site access, visibility, and incident response. We align deployment to your operating hours and risk profile.",
        bullets: ["Access control support", "Visible guarding", "Incident response readiness"],
        imageUrl: "https://images.pexels.com/photos/7714750/pexels-photo-7714750.jpeg",
    },
    {
        key: "waste",
        title: "Waste Management",
        blurb: "Collection, handling, and site waste coordination.",
        description:
            "Waste handling and removal support to keep your site clean and compliant. We can coordinate bins, pickups, and responsible disposal.",
        bullets: ["Bins + pickups coordination", "Clean site standards", "Responsible disposal support"],
        imageUrl: "https://images.pexels.com/photos/4445850/pexels-photo-4445850.jpeg",
    },
    {
        key: "plant",
        title: "Plant Hire",
        blurb: "Equipment support for site work and heavy duty tasks.",
        description:
            "Plant hire options for site operations. Tell us what you need and we will align the right equipment and availability.",
        bullets: ["Equipment aligned to task", "Flexible hire options", "Availability planning"],
        imageUrl:
            "https://images.pexels.com/photos/33444982/pexels-photo-33444982.jpeg?cs=srgb&dl=pexels-isabelle-taylor-33444982.jpg&fm=jpg",
    },
];

/** BENEFITS */
export const BENEFITS_SECTION: { heading: string; intro: string } = {
    heading: "Benefits",
    intro: "Why teams choose us for integrated site support.",
};

export const BENEFITS: Benefit[] = [
    {
        key: "coordination",
        title: "Coordinated delivery",
        blurb: "One partner across services to reduce handovers and speed up response.",
        iconPath: "/img/icons/benefits-coordination.svg",
    },
    {
        key: "uptime",
        title: "More predictable uptime",
        blurb: "Planned and reactive work aligned to your site and operating hours.",
        iconPath: "/img/icons/benefits-uptime.svg",
    },
    {
        key: "compliance",
        title: "Safety and compliance",
        blurb: "Documentation-ready processes that reduce risk and keep standards clear.",
        iconPath: "/img/icons/benefits-safety.svg",
    },
    {
        key: "visibility",
        title: "Clear visibility",
        blurb: "Straightforward communication and reporting so nothing gets missed.",
        iconPath: "/img/icons/benefits-communication.svg",
    },
    {
        key: "scale",
        title: "Scales as you grow",
        blurb: "Add services or increase coverage without changing providers.",
        iconPath: "/img/icons/benefits-scale.svg",
    },
    {
        key: "cost",
        title: "Better cost control",
        blurb: "Less duplication, better scheduling, and clearer scope by service.",
        iconPath: "/img/icons/benefits-cost.svg",
    },
];

/** HOW IT WORKS */
export const HOW_IT_WORKS_SECTION: { heading: string; intro: string } = {
    heading: "How it works",
    intro: "A simple process that keeps delivery clear from first contact to ongoing support.",
};

export const HOW_IT_WORKS_STEPS: HowStep[] = [
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

/** ABOUT */
export const ABOUT_SECTION: AboutSection = {
    heading: "About us",
    intro: "Integrated site support delivered with clear coordination and predictable standards.",
    body: [
        "CTRA Group provides integrated infrastructure and support services for operational sites. We bring key services under one coordinated delivery model so work is completed efficiently, safely, and without unnecessary handovers.",
        "Our teams support both planned maintenance and reactive call-outs. We prioritise clear communication, practical compliance, and consistent turnaround times - so sites keep running and managers get reliable outcomes.",
        "With multiple service lines available through one partner, clients gain better visibility, fewer delays between contractors, and a smoother path from enquiry to execution.",
    ],
    imageUrl:
        "https://images.pexels.com/photos/5686102/pexels-photo-5686102.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5686102.jpg&fm=jpg",
};

export const ABOUT_STATS: AboutStat[] = [
    { key: "services", label: "Services", value: "6+" },
    { key: "coverage", label: "Coverage", value: "On-site + mobile teams" },
    { key: "support", label: "Support", value: "Planned + reactive" },
];

export const ABOUT_VALUES: AboutValue[] = [
    {
        key: "coordination",
        title: "Coordination",
        blurb: "One point of contact with organised delivery across services.",
    },
    {
        key: "safety",
        title: "Safety-first",
        blurb: "Practical processes and documentation-ready work on site.",
    },
    {
        key: "clarity",
        title: "Clarity",
        blurb: "Clear updates and fewer surprises from start to finish.",
    },
];