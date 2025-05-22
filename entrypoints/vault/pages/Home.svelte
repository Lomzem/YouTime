<script lang="ts">
    import Controls from "./Home/Controls.svelte"
    import Videos from "./Home/Videos.svelte"
</script>

<main
    class="bg-background text-copy-light flex h-screen w-full flex-col items-center text-xl"
>
    <div class="flex w-full max-w-[135rem] flex-col gap-8 p-4 sm:px-6 lg:px-8">
        <Controls />
        <Videos />
    </div>
</main>
<!-- {#await videosPromise}{/await} -->
