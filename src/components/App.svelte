<script>
    import Header from "./Header.svelte";
    import Hero from "./Hero.svelte";
    import About from "./About.svelte";
    import CardContainer from "./Card-container.svelte";
    import Newsletter from "./Newsletter.svelte";
    import Card from "./Card.svelte";
    import Getintouch from "./Getintouch.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />
<main>
    <Hero />
    <About />
    <CardContainer />
    <Newsletter />
    <Card />
    <Getintouch />
</main>
<Footer />

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
