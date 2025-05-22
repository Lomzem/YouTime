<script lang="ts">
    import Router from "svelte-spa-router"
    import Home from "./pages/Home.svelte"
    import Details from "./pages/Details.svelte"

    const routes = {
        "/": Home,
        "/video/:id": Details,
    }
</script>

<Router {routes} />
