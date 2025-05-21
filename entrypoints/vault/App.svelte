<script lang="ts">
    const videospromise = Promise.resolve([
        {
            title: "How To Make A SPA With SvelteKit (SSR vs. CSR)",
            timestamps: [
                {
                    time: "00:21",
                    note: "This is where the chorus begins! Great melody here!",
                },
            ],
        },
        {
            title: "How To Make A SPA With SvelteKit (SSR vs. CSR)",
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
        },
        {
            title: "How To Make A SPA With SvelteKit (SSR vs. CSR)",
            timestamps: [
                {
                    time: "00:21",
                    note: "This is where the chorus begins! Great melody here!",
                },
                {
                    time: "01:45",
                    note: "Notice the key change in this section. The production quality is amazing.",
                },
                {
                    time: "01:45",
                    note: "Notice the key change in this section. The production quality is amazing.",
                },
                {
                    time: "01:45",
                    note: "Notice the key change in this section. The production quality is amazing.",
                },
            ],
        },
    ])
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
                    src="https://i.ytimg.com/vi/plBW8pbpOe0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaYPARYWCRChCH6BMhIGMiVDbfBw"
                    alt="thumbnail"
                />
                <section class="flex flex-col gap-2 px-4 py-4">
                    <div>
                        <h2 class="text-xl font-bold">
                            {video.title}
                        </h2>
                        <span class="text-card-content/75">
                            Last updated: <time>2 days ago</time>
                        </span>
                    </div>
                    <div>
                        <span class="text-card-content/75"
                            >{video.timestamps.length} notes:</span
                        >
                        <ul class="flex flex-col gap-1">
                            {#each video.timestamps.slice(0, 2) as timestamp}
                                <li
                                    class="bg-card1 text-card1-content flex items-center gap-2 rounded-lg p-2 transition-all duration-150 hover:opacity-97"
                                >
                                    <time
                                        class="gradient-primary rounded-lg p-1"
                                        >{timestamp.time}</time
                                    >
                                    <span>{timestamp.note}</span>
                                </li>
                            {/each}
                            {#if video.timestamps.length > 2}
                                <div></div>
                                <li>+2 more notes</li>
                            {/if}
                        </ul>
                    </div>
                </section>
            </card>
        {/each}
    {/await}
</main>
