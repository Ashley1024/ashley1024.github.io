# transform: translate(-50%, -50%)

~~~html
<div class="overlay-wrapper">
    <img src="architect.jpg" alt="BR Architect headquarters">
    <span>BR</span>
</div>

<style>

  body {
    margin: 0;
  }

  .overlay-wrapper {
    margin-top: 60px;
    position: relative;
  }
  .overlay-wrapper span {
    position: absolute;
    /* z-index: 5; */
    background: black;
    opacity: 0.7;
    /* transprarent 0 is all trans
     background: 1em rgba(0, 0, 0, 0.7);*/
    color: blanchedalmond;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
~~~