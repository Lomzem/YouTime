<script lang="ts">
    import appState from "../../shared/state.svelte"
    import { fade, scale } from "svelte/transition"
    import ListVideoCard from "./ListVideoCard.svelte"
    import GridVideoCard from "./GridVideoCard.svelte"
</script>

{#await appState.videosPromise then videos}
    <ul
        class={appState.viewMode == "list"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}
        in:fade={{ duration: 200 }}
    >
        {#each videos as video (getIDfromURL(video.url))}
            <div in:scale|global={{ duration: 200, delay: 100 }}>
                {#if appState.viewMode == "list"}
                    <ListVideoCard {video} />
                {:else}
                    <GridVideoCard {video} />
                {/if}
            </div>
        {/each}
    </ul>
{/await}
