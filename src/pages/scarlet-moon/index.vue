<template>
  <div class="scarlet-moon" />
</template>

<style lang="scss" scoped>
.scarlet-moon {
  position: relative;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: #000;
  box-shadow: inset 8px -8px crimson;
  animation: spin 2s linear infinite;

  &::before,
  &::after {
    position: absolute;
    border-radius: inherit;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: inherit;
    box-shadow: inherit;
    content: "";
  }

  &::before {
    filter: blur(5px);
  }

  &::after {
    filter: blur(10px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(1turn);
  }
}
</style>

<route lang="yaml">
meta:
  name: Scarlet Moon
  github: xx
</route>
