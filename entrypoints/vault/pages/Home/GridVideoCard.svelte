<script lang="ts">
    import { IconNote } from "@tabler/icons-svelte"

    interface Props {
        video: YTVideo
    }
    let { video }: Props = $props()
</script>

<a href={`#/video/${getIDfromURL(video.url)}`}>
    <li
        class="group ring-border/50 hover:ring-primary/30 h-full cursor-pointer overflow-hidden rounded-lg shadow-sm ring-1 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
        <div class="flex h-full flex-col">
            <div class="relative">
                <img
                    src={video.thumbnailUrl}
                    alt="thumbnail"
                    class="aspect-video w-full object-cover"
                />

                <time
                    class="absolute right-2 bottom-2 rounded-md bg-black/80 px-2 py-1 text-sm text-white/90 shadow-sm backdrop-blur-sm"
                >
                    <span>{video.timestamps.toSorted().pop()?.time}</span>
                </time>
            </div>

            <div class="bg-foreground flex flex-1 flex-col p-4">
                <h3
                    class="text-copy mb-3 line-clamp-2 leading-tight font-medium"
                >
                    {video.title}
                </h3>

                <div
                    class="text-copy-lighter mt-auto flex items-center gap-1.5 text-sm"
                >
                    <IconNote size={16} />
                    <span
                        >{video.timestamps.length} note{video.timestamps
                            .length !== 1
                            ? "s"
                            : ""}</span
                    >
                </div>
            </div>
        </div>
    </li>
</a>
