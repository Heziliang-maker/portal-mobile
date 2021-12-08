<!--
 * @Date: 2021-12-08
 * @Description: AboutUs
-->
<!--
 * @Date: 2021-05-28
 * @Description: 
-->
<template>
  <div class="aboutus">
    <div class="title">About Us</div>
    <div class="wrapper">
      <div class="banner">
        <img
          src="@/assets/images/page-static/page-static-map.webp"
          alt=""
        >
      </div>
      <div class="text">
        <header>Company profile</header>
        <main>"Kop" comes from the word used by the conductor of an ancient
          Chinese orchestra to describe a
          performer who plays beautiful music according to the score. In
          contemporary Chinese, it means
          reliable, trustworthy and entrusted. <br />
          We created the "Buykop" platform make brand manufacturers and
          consumers directly connect, so
          that consumers will know the products were made by who, how to make
          out.Consumers can directly
          purchase products from brand manufacturers in the brand online mall,
          And by "BUYKOP" supervision
          brand manufacturers to provide perfect quality and after-sales
          protection.<br />
          We hope to bring more high-quality and inexpensive products to global
          consumers through the
          "BuyKop", so that bring more and more happiness to your family.
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AboutUs"
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 19px;
}
.aboutus {
    .title {
        @include font-b(14px, $word-color-6);
        line-height: 20px;
        text-align: center;
        padding: 20px 0 0;
        border-top: 1px solid $border-color-5;
    }
    .banner {
        width: 100%;
        margin: 20px 0;
        img {
            width: 100%;
        }
    }
    .text {
        header {
            @include font-b(14px, $word-color-6);
            line-height: 20px;
            margin-bottom: 10px;
        }
        main {
            @include font-n(12px, $word-color-2);
            line-height: 17px;
        }
    }
}
</style>
