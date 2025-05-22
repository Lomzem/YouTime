<script lang="ts">
    import appState from "../shared/state.svelte.ts"

    interface Props {
        params: {
            id: string
        }
    }
    let { params }: Props = $props()
    const videoPromise = appState.videosPromise.then((videos) =>
        videos.find((v) => getIDfromURL(v.url) === params.id)
    )
</script>

<div class="text-4xl">
    <h1>This is details page! todo();</h1>
    <p>
        But I know that you chose this note: <span
            class="bg-gray-900 text-white">{params.id}</span
        >
    </p>
    <p>
        The video title is
        {#await videoPromise then video}
            {video?.title}
        {/await}
    </p>
    <br /><br />
    <a class="cursor-pointer hover:bg-gray-100" href="#/">Go back to main</a>
</div>
