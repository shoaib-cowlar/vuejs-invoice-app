<template>
  <div>
    <div v-if="!mobile" class="bg-[#141625] min-h-screen flex flex-col lg:flex-row">
      <Navigation />
      <div class="content | flex-1 text-white px-5 relative">
        <router-view />
      </div>
    </div>
    <div v-else class="flex flex-col text-center h-screen justify-center bg-[#141625] text-white">
      <h2 class="text-lg ">
        Not Allowed on Mobile Screens
      </h2>
    </div>

    <Teleport to="#modal">
      <transition name="invoice">
        <invoice-modal v-if="show"  />
      </transition>

    </Teleport>
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import InvoiceModal from "@/components/InvoiceModal.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useStore } from 'vuex'


const mobile = ref(null);
const store = useStore();
const show = computed(() => store.state.invoiceModal);

const checkScreen = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

.invoice-enter-active,
.invoice-leave-active {
  transition: 0.5s ease all;
}

.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin-inline: auto;
}

@media (min-width: 900px) {
  .container {
    margin-top: 72px;
  }
}

a {
  text-decoration: none;
  color: initial;
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}
</style>
