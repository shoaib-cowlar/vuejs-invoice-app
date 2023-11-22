<template>
  <main>
    <header class="container flex justify-between items-center">
      <div class="left | flex-1 flex flex-col gap-2">
        <h2 class="text-3xl font-bold">Invoices</h2>
        <p>There are 4 total invoices</p>
      </div>
      <div class="right | flex items-center gap-8 justify-between">
        <div
          ref="filter"
          class="flex gap-4 items-center relative cursor-pointer"
          @click="toggleFilterMenu"
        >
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <transition name="fade">
            <ul
              v-show="filterMenu"
              class="absolute top-8 w-full bg-[#1e2139] flex flex-col gap-2 rounded shadow"
            >
              <li
                class="cursor-pointer px-2 py-1 rounded hover:text-[#1e2139] hover:bg-white transition"
              >
                Draft
              </li>
              <li
                class="cursor-pointer px-2 py-1 rounded hover:text-[#1e2139] hover:bg-white transition"
              >
                Pending
              </li>
              <li
                class="cursor-pointer px-2 py-1 rounded hover:text-[#1e2139] hover:bg-white transition"
              >
                Paid
              </li>
              <li
                class="cursor-pointer px-2 py-1 rounded hover:text-[#1e2139] hover:bg-white transition"
              >
                Clear Filter
              </li>
            </ul>
          </transition>
        </div>
        <button
          @click="openConfirm"
          class="button flex items-center gap-2 bg-[#7c5dfa]"
        >
          <span class="text-lg">New Invoice</span>
          <img
            src="@/assets/icon-plus.svg"
            alt=""
            class="flex items-center justify-center bg-white p-2 rounded-[50%]"
          />
        </button>
      </div>
    </header>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const openConfirm = () => {
  store.commit("TOGGLE_INVOICE");
};

const filterMenu = ref(false);

const toggleFilterMenu = () => {
  filterMenu.value = !filterMenu.value;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
