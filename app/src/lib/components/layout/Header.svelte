<script lang="ts">
    let hamOpen = true;

    function toggleMenu() {
        hamOpen = !hamOpen;
    }
</script>

<header>
    <img class="logo" src="img/brand/logo.svg" alt="Logo" />

    <button
        type="button"
        class="ham"
        on:click={toggleMenu}
        aria-label={hamOpen ? "Close menu" : "Open menu"}
        aria-expanded={hamOpen}
    >
        <img
            src={hamOpen ? "img/icons/ham-close.svg" : "img/icons/ham-open.svg"}
            alt=""
        />
    </button>

    <nav class:show={hamOpen}>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a class="btn" href="/contact">Hire us</a>
    </nav>
</header>

<style>
    header {
        width: 90%;
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding: var(--spacing4) 0;
    }

    nav {
        display: flex;
        align-items: center;
        gap: var(--spacing5);
    }

    /* button now, not img */
    .ham {
        display: none;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .ham img {
        width: 20px;
        display: block;
    }

    @media (max-width: 800px) {
        .ham {
            display: block;
        }

        nav {
            display: none;
        }

        nav.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: var(--spacing6);
            right: 0px;
            background: var(--accent);
            padding: var(--spacing4);
            gap: var(--spacing4);
            border-radius: var(--spacing2);
        }
    }

    .logo {
        width: 50px;
        height: auto;
    }
</style>
