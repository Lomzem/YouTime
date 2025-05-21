<script lang="ts">
    const ytvideo: YTVideo = {
        title: "Rick Astley - Never Gonna Give You Up",
        timestamps: [
            {
                time: "00:21",
                note: "This is where the chorus begins! Great melody here!",
            },
            {
                time: "01:45",
                note: "Notice the key change in this section. The production quality is amazing.",
            },
        ],
    }
    const videospromise = Promise.resolve([ytvideo])
</script>

<main
    class="from-bg0 to-bg1 text-fg flex h-dvh flex-col items-center bg-linear-150 px-[max(1rem,4%)]"
>
    {#await videospromise then videos}
        {#each videos as video}
            <card
                class="bg-card-bg grid w-full grid-cols-[250px_1fr] rounded-xl"
            >
                <img
                    class="rounded-lg"
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                    alt="thumbnail"
                />
                <section class="flex flex-col gap-4 px-4 py-4">
                    <div>
                        <h2 class="text-xl font-bold">
                            {video.title}
                        </h2>
                        <span class="text-muted-fg">
                            Last updated: <time>2 days ago</time>
                        </span>
                    </div>
                    <ul class="flex flex-col gap-2">
                        <span class="text-muted-fg"
                            >{video.timestamps.length} notes:</span
                        >
                        {#each video.timestamps as timestamp}
                            <li
                                class="bg-bg3 flex items-center gap-3 rounded-lg p-2"
                            >
                                <time class="gradient-primary rounded-lg p-1"
                                    >{timestamp.time}</time
                                >
                                <span>{timestamp.note}</span>
                            </li>
                        {/each}
                    </ul>
                </section>
            </card>
        {/each}
    {/await}
</main>
