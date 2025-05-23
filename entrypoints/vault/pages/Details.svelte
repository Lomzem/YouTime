<script lang="ts">
    import appState from "../shared/state.svelte.ts"
    import { IconPlus, IconArrowLeft } from "@tabler/icons-svelte"
    import { fade } from "svelte/transition"
    import { getIDfromURL } from "@/utils/ytutils"

    interface Props {
        params: {
            id: string
        }
    }

    let { params }: Props = $props()
    const videoPromise = $derived(
        appState.videosPromise.then((videos: YTVideo[]) =>
            videos.find((v) => getIDfromURL(v.url) === params.id)
        )
    )

    let newNote = $state("")
    let newTimestamp = $state("0:00")

    function addNote() {
        if (!newNote.trim()) return

        // TODO: Implement note adding functionality
        newNote = ""
        newTimestamp = "0:00"
    }
</script>

<main
    class="bg-background text-copy-light flex min-h-screen w-full flex-col items-center py-6 text-base"
    in:fade={{ duration: 200 }}
>
    <div class="flex w-full max-w-[120rem] flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#/" class="neutral flex w-fit items-center gap-2 text-base">
            <IconArrowLeft size={20} />
            <span>Back to Videos</span>
        </a>

        {#await videoPromise then video}
            {#if video}
                <div class="flex flex-col gap-8 lg:flex-row">
                    <!-- Left Column: Video and Add Note -->
                    <div class="flex flex-1 flex-col gap-8">
                        <!-- Video Player -->
                        <div
                            class="bg-foreground ring-border/50 rounded-lg p-4 shadow-sm ring-1"
                        >
                            <div
                                class="relative w-full"
                                style="padding-top: 56.25%;"
                            >
                                <iframe
                                    class="absolute top-0 left-0 h-full w-full rounded-lg"
                                    src="https://www.youtube.com/embed/{params.id}"
                                    title={video.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <h1 class="text-copy pt-4 text-xl font-medium">
                                {video.title}
                            </h1>
                        </div>

                        <!-- Add Note Section -->
                        <div
                            class="bg-foreground ring-border/50 rounded-lg p-4 shadow-sm ring-1"
                        >
                            <h2 class="text-copy pb-4 text-lg font-medium">
                                Add Note
                            </h2>
                            <form
                                class="flex flex-col gap-4"
                                onsubmit={(e) => {
                                    e.preventDefault()
                                    /* Don't worry about this for now */
                                    addNote()
                                }}
                            >
                                <div class="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Timestamp (e.g. 1:23)"
                                        class="bg-background w-32 flex-none rounded-lg px-3 py-2"
                                        bind:value={newTimestamp}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Note"
                                        class="bg-background flex-1 rounded-lg px-3 py-2"
                                        bind:value={newNote}
                                    />
                                </div>
                                <button
                                    class="neutral flex items-center gap-2 self-end"
                                    type="submit"
                                >
                                    <IconPlus size={20} />
                                    <span>Add Note</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <!-- Right Column: Timestamps -->
                    <div class="flex flex-col lg:w-96">
                        <div
                            class="bg-foreground ring-border/50 h-full rounded-lg p-4 shadow-sm ring-1"
                        >
                            <h2 class="text-copy pb-4 text-lg font-medium">
                                Timestamps
                            </h2>
                            <div
                                class="flex max-h-[60vh] flex-col gap-4 overflow-y-auto"
                            >
                                {#each video.timestamps.sort( (a, b) => a.time.localeCompare(b.time) ) as timestamp}
                                    <div class="bg-background rounded-lg p-3">
                                        <div
                                            class="flex items-start justify-between gap-4"
                                        >
                                            <span
                                                class="text-copy bg-border/50 rounded px-2 py-1 font-medium"
                                                >{timestamp.time}</span
                                            >
                                        </div>
                                        <p class="text-copy-light mt-2">
                                            {timestamp.note}
                                        </p>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            {:else}
                <div class="text-copy py-8 text-center">Video not found</div>
            {/if}
        {/await}
    </div>
</main>
