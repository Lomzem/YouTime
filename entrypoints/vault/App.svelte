<script lang="ts">
    import { EXTStorage } from "@/utils/storage"

    let videospromise = $state(
        EXTStorage.YTVideos.getValue().then((allvideos) => {
            if (!allvideos) return []
            return Object.entries(allvideos).map((entry) => {
                return { url: entry[0], video: entry[1] }
            })
        })
    )

    storage.watch(EXTStorage.YTVideos.key, (_new: AllVideos | null) => {
        if (!_new) return []
        videospromise = Promise.resolve(
            Object.entries(_new).map((entry) => {
                return { url: entry[0], video: entry[1] }
            })
        )
    })

    function urlThumbnail(url: string): string {
        const id = url.split("/").at(-1)
        if (!id) throw new Error("Invalid URL")
        return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    }
</script>

<main
    class="text-foreground 10dvw, 4rem)] bg-background flex h-dvh flex-col items-center gap-4 p-16 lg:p-64"
>
    <h1 class="self-baseline text-2xl font-bold">Your Video Notes</h1>
    {#await videospromise then videos}
        {#each videos as video}
            <card
                class="bg-card text-card-content grid h-56 w-full cursor-pointer grid-cols-[250px_1fr] items-center rounded-xl px-4 transition-all duration-150 hover:scale-101"
            >
                <img
                    class="rounded-lg"
                    src={urlThumbnail(video.url)}
                    alt="thumbnail"
                />
                <section class="flex flex-col gap-2 px-4 py-4">
                    <div>
                        <h2 class="text-xl font-bold">
                            {video.video.title}
                        </h2>
                    </div>
                    <div>
                        <span class="text-card-content/75"
                            >{video.video.timestamps.length} notes:</span
                        >
                        <ul class="flex flex-col gap-1">
                            {#each video.video.timestamps.slice(0, 2) as timestamp}
                                <li
                                    class="bg-card1 text-card1-content flex items-center gap-2 rounded-lg px-2 py-1 transition-all duration-150 hover:opacity-97"
                                >
                                    <time
                                        class="gradient-primary rounded-lg p-1"
                                        >{timestamp.time}</time
                                    >
                                    <span>{timestamp.note}</span>
                                </li>
                            {/each}
                            {#if video.video.timestamps.length > 2}
                                <div></div>
                                <li>
                                    +{video.video.timestamps.length - 2} more notes
                                </li>
                            {/if}
                        </ul>
                    </div>
                </section>
            </card>
        {/each}
    {/await}
</main>
