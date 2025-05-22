<script lang="ts">
    import appState from "../../shared/state.svelte"
</script>

{#snippet videoCard(video: YTVideo)}
    <a href={`#/video/${getIDfromURL(video.url)}`}>
        <li
            class="group h-full cursor-pointer overflow-hidden rounded-lg transition-all duration-200 hover:scale-101"
        >
            <div class="flex h-full flex-col">
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

                <div class="bg-foreground flex flex-1 flex-col p-3">
                    <h3 class="mb-2 line-clamp-2 font-medium">{video.title}</h3>

                    <div class="text-copy-lighter mt-auto text-sm">
                        <span>{video.timestamps.length} notes</span>
                    </div>
                </div>
            </div>
        </li>
    </a>
{/snippet}

<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#await appState.videosPromise then videos}
        {#each videos as video}
            {@render videoCard(video)}
        {/each}
    {/await}
</ul>
