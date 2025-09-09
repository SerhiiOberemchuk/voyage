<script>
  import Header from "../../layout/Header.svelte";
  import Container from "../Container.svelte";
  // import houses from "../assets/images/FrameHouses.png";
  const voyage = "voyage";
</script>

<section id="hero" class="section">
  <Header />

  <h1 class="title">
    {#each voyage as item}
      <span>{item}</span>
    {/each}
  </h1>
  <Container>
    <div class="divider"></div>
    <div class="wrapper">
      <p class="text">Your Exclusive Passport</p>
      <button class="btnBook" type="button">BOOK NOW</button>
      <p class="text">to the Extraordinary</p>
    </div>
  </Container>
  <!-- <img
    class="houses"
    src={houses}
    alt="two houses on the field"
    aria-hidden="true"
  /> -->
</section>

<style>
  .section {
    position: relative;
    background-image: url("../assets/images/herobackgr.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* object-fit: fill; */
    padding: 40px 0 86px;
  }
  .title {
    margin-top: 244px;
    font-family: var(--second-family);
    font-weight: 500;
    text-transform: uppercase;
    font-size: 50px;
    line-height: 124%;
    letter-spacing: -0.03em;
    text-align: center;
    color: #e8e8e8;
  }
  .title span {
    position: relative;
  }
  .title span:nth-child(4),
  .title span:nth-child(2) {
    z-index: 500;
  }
  .divider {
    height: 1px;
    background-color: #e8e8e8;
    margin-bottom: 52px;
  }
  .text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 114%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
  }
  .btnBook {
    border: 1px solid #e8e8e8;
    background-color: transparent;
    border-radius: 20px;
    padding: 10px;
    width: 145px;
    height: 38px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 114%;
    letter-spacing: -0.03em;
    color: #e8e8e8;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
  }
  /* .houses {
    position: absolute;
    top: 50%;
    left: 50%;
    scale: 1.2;
    transform: translate(-486px, -64px);
  } */
  @media (width >= 768px) {
    .title {
      font-size: 200px;
    }
  }
  @media (width >= 1240px) {
    .title {
      font-size: 350px;
    }
  }
  @media (width >= 1920px) {
    .title {
      font-size: 520px;
    }
  }
</style>
