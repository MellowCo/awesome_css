<template>
  <div class="flash-btn">
    flash
  </div>
</template>

<style scoped lang="scss">
.flash-btn {
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding: 10px 25px;
  border: 1px #fff solid;
  background-color: #10151e;
  color: #fff;
  transition: .4s;

  &:hover {
    box-shadow: 0 0 15px 7px #74b9ff;
    &::before {
      transform: translateX(100%);
    }
  }

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(
    120deg,
    transparent,
    #74b9ff,
    transparent
    );
    content: "";
    transform: translateX(-100%);
    transition: .6s;
  }
}
</style>

<route lang="yaml">
meta:
  name: Flash Button
  github: xxx
</route>
