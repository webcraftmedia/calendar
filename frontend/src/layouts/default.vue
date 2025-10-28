<template>
  <div class="h-screen">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.content {
  @apply mt-16
}
</style>