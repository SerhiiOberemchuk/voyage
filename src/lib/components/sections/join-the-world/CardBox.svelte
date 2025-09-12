<script lang="ts">
  import { inView } from "$lib/action/inView";
  import vector1 from "$lib/assets/images/jtw-section/Vector1.svg";
  import vector2 from "$lib/assets/images/jtw-section/Vector2.svg";

  type CadrType = { place: string; time: string; img_url: string };

  const cards: CadrType[] = $state([
    {
      place: "sicilian",
      time: "sundays",
      img_url: "/images/jtw-section/jtw-1.webp",
    },
    {
      place: "iceland",
      time: "vacations",
      img_url: "/images/jtw-section/jtw-2.webp",
    },
    {
      place: "ocean",
      time: "weekend",
      img_url: "/images/jtw-section/jtw-3.webp",
    },
  ]);
</script>

<div class="wrapper animation_triger" use:inView={{ rootMargin: "100px" }}>
  <img src={vector1} alt="v1" class="vector1" />
  <img src={vector2} alt="v2" class="vector2" />
  {#each cards as item, index (item.place)}
    <div class="card_item" style={`--i:${index + 1}`} data-number={index + 1}>
      <div class="cader_item_wrapper">
        <img src={item.img_url} alt={item.time} />
        <div class="title_top">
          <p>{item.place}</p>
          <div></div>
          <p>{item.time}</p>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .card_item {
    padding: 6px 6px 0 6px;
    background-color: white;
    position: absolute;
    z-index: var(--i);
    offset-distance: 0;

    offset-anchor: 0 0;
  }
  .card_item[data-number="1"] {
    top: 30%;
    left: 50%;
    transform: rotate(-25deg);
    offset-rotate: 0deg;
    offset-path: path("M-400,20 V-100 C-400,-300 -800,-300 -950,-124");
  }
  .card_item[data-number="2"] {
    top: 29%;
    left: 50%;
    transform: rotate(14deg);
    offset-rotate: 0deg;
    offset-path: path(
      "M-400,20 V-50 C-400,-300 -800,-300 -800,0 C-800,200 -400,100 -240,-114"
    );
  }
  .card_item[data-number="3"] {
    offset-position: 0% 0%;
    offset-rotate: 0deg;
    offset-path: path(
      "M-50,420 V300 C0,0 -300,0 -300,300 C-300,600 0,0 800,192"
    );
    /* offset-path: path(
      "M -50 420 C -100 -200, -100 -200, -200 -200 A 100 100 0 1 0 200 400 L 600 400"
    ); */
  }
  .cader_item_wrapper {
    position: relative;
  }
  .cader_item_wrapper img {
    width: 656px;
  }
  .title_top {
    width: 100%;
    position: absolute;
    top: 30px;
    padding-inline: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 16px;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 36px;
    line-height: 91%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #fff;
    align-items: center;
  }
  .title_top div {
    border: 2px solid #fff;
    flex: 1;
  }
  .vector1 {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 0;
    transform: translate(-54.6%, -38%);
  }
  .vector2 {
    margin-top: 500px;
    position: relative;
    z-index: 10;
  }
  :global(.animation_triger[data-inview]) .card_item[data-number="3"] {
    animation: moveAlong3 4s linear forwards;
  }
  :global(.animation_triger[data-inview]) .card_item[data-number="2"] {
    animation: moveAlong2 3s 1s linear forwards;
  }
  :global(.animation_triger[data-inview]) .card_item[data-number="1"] {
    animation: moveAlong1 2s 2s linear forwards;
  }
  @keyframes moveAlong3 {
    50% {
      z-index: 15;
      transform: rotate(-14deg);
    }
    100% {
      offset-distance: 100%;
      z-index: 15;
    }
  }
  @keyframes moveAlong2 {
    30% {
      z-index: 14;
    }
    100% {
      transform: rotate(0deg);
      offset-distance: 100%;
      z-index: 14;
    }
  }
  @keyframes moveAlong1 {
    30% {
      z-index: 13;
    }
    100% {
      transform: rotate(0deg);
      offset-distance: 100%;
      z-index: 13;
    }
  }
</style>
