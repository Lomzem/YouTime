<script lang="ts">
    import appState from "../shared/state.svelte.ts"
</script>

{#if appState.focused}
    <div class="text-4xl">
        <h1>This is details page! todo();</h1>
        <p>
            But I know that you chose this note: <span
                class="bg-gray-900 text-white">{appState.focused.title}</span
            >
        </p>
        <br /><br />
        <button
            class="cursor-pointer hover:bg-gray-100"
            onclick={() => {
                appState.focused = null
            }}>Go back to main</button
        >
    </div>
{/if}
