<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    classN?: string;
  };
  const { classN, children }: Props = $props();
</script>

<div class={`container ${classN}`}>
  {@render children()}
</div>

<style>
  .container {
    max-width: 1920px;
    margin-inline: auto;
    padding-inline: 60px;
  }
  /* @media (width >=48rem) {
    .container {
      max-width: 1920px;
    }
  } */
</style>
