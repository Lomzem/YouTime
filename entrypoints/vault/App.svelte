<script lang="ts">
    interface Data {
        heading: string
        body: string
    }
    let data = $state<Data[]>([])

    for (let i = 0; i < 19; i++) {
        data.push({
            heading: "heading",
            body: "this is a body",
        })
    }
</script>

<main
    class="from-background-0 to-background-1 text-foreground flex flex-col items-center bg-linear-150"
>
    <div
        class="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-center justify-center gap-16 bg-blue-950"
    >
        {#each data as d}
            <card>
                <h3>{d.heading}</h3>
                <p>{d.body}</p>
            </card>
        {/each}
    </div>
</main>
