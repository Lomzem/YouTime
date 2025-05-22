<script lang="ts">
    import appState from "../../shared/state.svelte"
</script>

{#snippet videoCard(video: YTVideo)}
    <button
        onclick={() => {
            appState.focused = video
            console.log("hi", video)
        }}
    >
        <li class="bg-foreground cursor-pointer overflow-hidden rounded-lg">
            <div class="relative">
                <img
                    src={video.thumbnailUrl}
                    alt="thumbnail"
                    class="aspect-video w-full object-cover"
                />

                <time
                    class="absolute right-2 bottom-2 rounded bg-black/70 px-2 py-1 text-sm text-white"
                >
                    <span>{video.timestamps.toSorted().pop()?.time}</span>
                </time>
            </div>

            <div class="line-clamp-2 p-3 font-medium">
                <h3>{video.title}</h3>
            </div>
        </li>
    </button>
{/snippet}

<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#await appState.videosPromise then videos}
        {#each videos as video}
            {@render videoCard(video)}
        {/each}
    {/await}
</ul>
