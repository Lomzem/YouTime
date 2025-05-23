<script lang="ts">
    import Controls from "./Home/Controls.svelte"
    import Videos from "./Home/Videos.svelte"
</script>

<main
    class="bg-background text-copy-light flex min-h-screen w-full flex-col items-center py-6 text-base"
>
    <div class="flex w-full max-w-[120rem] flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <Controls />
        <Videos />
    </div>
</main>
<!-- {#await videosPromise}{/await} -->
