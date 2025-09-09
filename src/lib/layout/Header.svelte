<script lang="ts">
  import { fly, scale } from "svelte/transition";
  import logo from "$lib/assets/logo.svg";
  import { inView } from "$lib/action/inView";

  let links: string[] = $state([
    "about us",
    "advanteges",
    "special services",
    "trips",
  ]);
</script>

<header class="header">
  <div class="container" use:inView={{ rootMargin: "-100px" }}>
    <a class="logo" in:scale={{ start: 2, duration: 300 }} href="/">
      <img src={logo} alt="logo company" />
    </a>
    <nav>
      <ul class="list">
        {#each links as link, i (link)}
          <li
            class="item_list"
            style={`--i:${i}`}
            in:fly={{ y: -10, duration: 400, delay: i * 200 }}
          >
            <a class="link" href={`#${link}`}>{link}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <a
      in:fly={{
        y: -10,
        duration: 400,
        delay: links.length * 200,
      }}
      class="link decor link_start"
      href={`#start planning`}>start planning</a
    >
  </div>
</header>

<style>
  :global(.header [data-inview]) .logo img {
    transform: scale(1);
  }
  .logo img {
    transform: scale(1.3);
    transition: all 300ms linear;
  }
  .header {
    overflow: hidden;
  }
  .list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    color: black;
  }
  .header :global(.container) {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
  }
  .link {
    text-transform: uppercase;
  }
  .item_list,
  .link_start {
    transform: translateY(100px);
  }
  :global(.header [data-inview]) .item_list {
    animation: flyanimation 1s calc(var(--i) * 200ms) linear forwards;
  }
  :global(.header [data-inview]) .link_start {
    animation: flyanimation 1s calc(4 * 200ms) linear forwards;
    opacity: 1;
  }
  .decor {
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: 700;
    text-decoration-skip-ink: none;
  }
  @keyframes flyanimation {
    to {
      transform: translateY(0);
    }
  }
</style>
