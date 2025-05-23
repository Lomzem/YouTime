<script lang="ts">
    import {
        IconLayoutGrid,
        IconLayoutList,
        IconDownload,
        IconSortAscending,
        IconSortDescending,
    } from "@tabler/icons-svelte"
    import appState from "../../shared/state.svelte"
</script>

<section
    class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
>
    <div class="flex items-center gap-4">
        {#await appState.videosPromise then videos}
            <span class="text-copy-light text-base"
                >{videos.length} videos found</span
            >
        {/await}
        <button class="neutral flex items-center gap-2 text-base">
            <IconDownload size={20} />
            <span>Export All Notes</span>
        </button>
    </div>
    <div class="flex items-center gap-2">
        <div class="bg-foreground flex rounded-lg p-1">
            <button
                class="flex items-center gap-1.5 rounded px-3 py-1.5 text-base transition-colors {appState.viewMode ===
                'card'
                    ? 'bg-background'
                    : 'hover:bg-background/50'}"
                on:click={() => (appState.viewMode = "card")}
            >
                <IconLayoutGrid size={18} />
                <span>Card</span>
            </button>
            <button
                class="flex items-center gap-1.5 rounded px-3 py-1.5 text-base transition-colors {appState.viewMode ===
                'list'
                    ? 'bg-background'
                    : 'hover:bg-background/50'}"
                on:click={() => (appState.viewMode = "list")}
            >
                <IconLayoutList size={18} />
                <span>List</span>
            </button>
        </div>

        <select
            bind:value={appState.sortBy}
            class="neutral bg-foreground rounded-lg px-3 py-2 text-base"
        >
            <option value="recent">Recently added</option>
            <option value="notes">Most notes</option>
            <option value="title">Title</option>
        </select>

        <button
            class="neutral flex h-10 w-10 items-center justify-center"
            on:click={() =>
                (appState.sortOrder =
                    appState.sortOrder === "asc" ? "desc" : "asc")}
        >
            {#if appState.sortOrder === "asc"}
                <IconSortAscending size={20} />
            {:else}
                <IconSortDescending size={20} />
            {/if}
        </button>
    </div>
</section>
