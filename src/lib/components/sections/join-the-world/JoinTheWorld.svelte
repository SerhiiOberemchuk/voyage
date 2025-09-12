<script lang="ts">
  import CardBox from "./CardBox.svelte";

  const title = "Join the world that only a few know".split(" ");
</script>

<section class="sectionJoin">
  <h2 class="title">
    {#each title as span (span)}
      <span>{span}</span>
    {/each}
  </h2>
  <p class="text">For those who appreciate exclusivity!</p>
  <CardBox />
</section>

<style>
  .sectionJoin {
    overflow: hidden;
    background-image: url("/images/bgJTW.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 118px;
    padding-bottom: 56px;
  }
  .title {
    display: flex;
    column-gap: 28px;
    justify-content: center;
    flex-wrap: wrap;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 128px;
    line-height: 124%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    text-align: center;
    color: #0b0c05;
    margin-bottom: 56px;
  }
  .title :nth-child(3),
  .title :nth-child(8) {
    color: #eaffb1;
    font-style: italic;
  }
  .text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 124%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    text-align: center;
    color: #191919;
  }
</style>
