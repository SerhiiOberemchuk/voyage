<div class="container">
  <slot />
</div>

<style>
  .container {
    /* max-width: 60rem; */
    padding-inline: 60px;
    background-color: aqua;
  }
  @media (width >=48rem) {
    .container {
      max-width: 90rem;
    }
  }
</style>
