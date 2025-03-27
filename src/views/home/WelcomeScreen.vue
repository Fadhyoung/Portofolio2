<template>
  <div class="w-full h-screen flex flex-row justify-center items-center">
    <!-- LEFT SIDE -->
    <div
      class="relative w-[60%] h-full flex items-center justify-center -z-10 parallelogram bg-radial-pattern-dark-theme"
    >
      <div class="w-full h-full absolute bottom-0 right-0 bg-gradient-dark-theme"></div>
      <div class="absolute bottom-0 p-0 m-0">
        <img src="/images/img_person_welcomescreen.png" alt="Logo" class="w-[600px]" />
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="w-[40%]">
      <h3>dsaf</h3>
    </div>
  </div>
</template>

<style scoped>
.parallelogram {
  clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
}
.bg-radial-pattern-light-theme {
  opacity: 1;
  background-image: radial-gradient('#' 0.5px, #ffffff 0.5px);
  background-size: 10px 10px;
}

.bg-radial-pattern-dark-theme {
  opacity: 1;
  background-image: radial-gradient(#ffffff 0.72px, #0d2237 0.5px);
  background-size: 14px 14px;
}

.bg-gradient-light-theme {
  background: linear-gradient(to top, var(--white), transparent, var(--white));
}

.bg-gradient-dark-theme {
  background: linear-gradient(to top, #0d2237, transparent, #0d2237);
}
</style>
