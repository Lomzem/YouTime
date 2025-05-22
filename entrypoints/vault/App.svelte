<script lang="ts">
    import Home from "./pages/Home.svelte"
    import Details from "./pages/Details.svelte"
    import appState from "./shared/state.svelte.ts"
</script>

{#if !appState.focused}
    <Home />
{:else}
    <Details />
{/if}
