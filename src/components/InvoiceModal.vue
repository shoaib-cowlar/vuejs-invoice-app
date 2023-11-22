<template>
  <div @click="checkClick"
    class="form-container | fixed top-0 left-16 flex flex-col h-screen bg-[#141625] text-white shadow-lg px-16 py-6 w-fit overflow-y-scroll ">
    <form @click.stop @submit.prevent="submitForm">
      <h1 class="text-5xl font-bold my-12">New Invoice </h1>
      <h4 class="text-[#7c5dfa] font-bold text-lg my-4">BillFrom</h4>

      <!-- Bill From Section -->
      <section class="bill-from | mb-16 flex flex-col gap-8">
        <fieldset class="flex flex-col gap-1">
          <label for="address" class="font-bold">Street Address</label>
          <input v-model="invoiceData.billerStreetAddress" required type="text" id="address"
            class="rounded p-4 focus:outline-none bg-[#1e2139]" />
        </fieldset>

        <div class="flex gap-4">
          <fieldset class="flex flex-col gap-2">
            <label class="font-bold" for="city">City</label>
            <input v-model="invoiceData.billerCity" required type="text" id="city"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>

          <fieldset class="flex flex-col gap-2">
            <label class="font-bold" for="zipcode">Zip Code</label>
            <input v-model="invoiceData.billerZipCode" required type="number" id="zipcode"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>

          <fieldset class="flex flex-col gap-2">
            <label class="font-bold" for="country">Country</label>
            <input v-model="invoiceData.billerCity" required type="text" id="country"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>
        </div>
      </section>

      <!-- Bill To Section -->
      <h4 class="text-[#7c5dfa] font-bold text-lg my-4">BillTo</h4>
      <section class="bill-to | mb-16 flex flex-col gap-8">
        <fieldset class="flex flex-col gap-1">
          <label for="clientName" class="font-bold">Client's Name </label>
          <input v-model="invoiceData.clientName" required type="text" id="clientName"
            class="rounded p-4 focus:outline-none bg-[#1e2139]" />
        </fieldset>

        <fieldset class="flex flex-col gap-1">
          <label for="clientEmail" class="font-bold">Client's Email </label>
          <input v-model="invoiceData.clientEmail" required type="email" id="clientEmail"
            class="rounded p-4 focus:outline-none bg-[#1e2139]" />
        </fieldset>

        <fieldset class="flex flex-col gap-1">
          <label for="clientStreetAddress" class="font-bold">Street Address
          </label>
          <input v-model="invoiceData.clientStreetAddress" required type="text" id="clientStreetAddress"
            class="rounded p-4 focus:outline-none bg-[#1e2139]" />
        </fieldset>

        <section class="flex gap-4">
          <fieldset class="flex flex-col gap-2">
            <label class="font-bold" for="clientCity">City</label>
            <input v-model="invoiceData.clientCity" required type="text" id="clientCity"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>

          <fieldset class="flex flex-col gap-2">
            <label class="font-bold" for="clientZipcode">Zip Code</label>
            <input v-model="invoiceData.clientZipCode" required type="number" id="clientZipcode"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>

          <fieldset class="flex flex-col gap-2">
            <label class="font-bold" for="clientCountry">Country</label>
            <input v-model="invoiceData.clientCountry" required type="text" id="clientCountry"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>
        </section>
      </section>

      <section class="invoice-details | flex flex-col gap-4">
        <section class="dates | flex gap-4">
          <fieldset class="flex-1 flex flex-col gap-1">
            <label for="invoiceDate" class="font-bold">Invoice Date</label>
            <input v-model="invoiceData.invoiceDate" required type="date" id="invoiceDate"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>

          <fieldset class="flex-1 flex flex-col gap-1">
            <label for="paymentDue" class="font-bold">Payment Due </label>
            <input v-model="invoiceData.paymentDueDate" required type="date" id="paymentDue"
              class="rounded p-4 focus:outline-none bg-[#1e2139]" />
          </fieldset>
        </section>

        <fieldset class="flex flex-col gap-1">
          <label for="paymentTerms" class="font-bold">Payment Terms </label>
          <select v-model="invoiceData.paymentTerms" required type="text" id="paymentTerms"
            class="rounded p-4 focus:outline-none bg-[#1e2139]">
            <option value="30">Net 30 days</option>
            <option value="60">Net 60 days</option>
          </select>
        </fieldset>

        <fieldset class="flex flex-col gap-1">
          <label for="productDescription" class="font-bold">Product Description
          </label>
          <input v-model="invoiceData.productDescription" required type="text" id="productDescription"
            class="rounded p-4 focus:outline-none bg-[#1e2139]" />
        </fieldset>
      </section>

      <section class="work-items">
        <h3 class="text-[#777f98] text-2xl mt-6 font-bold">Item List</h3>
        <table class="item-list |  w-full">
          <tr class="table-heading | gap-6 flex w-full">
            <th class="item-name | basis-[50%] ">Item Name</th>
            <th class="qty| basis-[10%]">QTY</th>
            <th class="price| basis-[20%]">Price</th>
            <th class="total| basis-[20%]">Total</th>
          </tr>
          <tr class="table-items | relative my-6 gap-6 flex w-full" v-for="(item, index) in invoiceData.invoiceItemList"
            :key="index">
            <td class="item-name | w-[50%]"><input class="w-full rounded p-2 focus:outline-none bg-[#1e2139]" type="text"
                v-model="item.itemName"></td>
            <td class="qty | w-[10%]"><input class="w-full rounded p-2 focus:outline-none bg-[#1e2139]" type="number"
                v-model="item.qty"></td>
            <td class="price | w-[20%]"><input class="w-full rounded p-2 focus:outline-none bg-[#1e2139]" type="number"
                v-model="item.price"></td>
            <td class="total | w-[20%] flex items-center ps-2">${{ item.total = item.qty * item.price }}</td>
            <img class="absolute top-3 right-2 w-3 h-4 cursor-pointer" @click="deleteInvoiceItem(item.id)"
              src="@/assets/icon-delete.svg" alt="">
          </tr>

        </table>
        <button @click="addItem" class="flex items-center gap-2 w-full justify-center py-4 bg-[#1e2139] my-8">
          <img src="@/assets/icon-plus.svg" alt="">
          <span class="text-lg">Add New Item</span>
        </button>
      </section>

      <div class="save flex my-10 ">
        <div class="left | flex-1">
          <button @click="closeInvoice" class="bg-[#ec5757] text-base">
            Cancel
          </button>
        </div>
        <div class="right | flex gap-4">
          <button @click="saveDraft" class="bg-[#252945] text-base">
            Save Draft
          </button>
          <button @click="publishInvoice" class="bg-[#7c5dfa] text-base">
            Create Invoice
          </button>
        </div>
      </div>
    </form>


  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { uid } from "uid"
import store from "../store";

const invoiceData = ref({
  billerStreetAddress: null,
  billerCity: null,
  billerZipCode: null,
  billerCountry: null,
  clientName: null,
  clientEmail: null,
  clientStreetAddress: null,
  clientCity: null,
  clientZipCode: null,
  clientCountry: null,
  invoiceDateUnix: null,
  invoiceDate: null,
  paymentTerms: null,
  paymentDueDateUnix: null,
  paymentDueDate: null,
  productDescription: null,
  invoicePending: null,
  invoiceDraft: null,
  invoiceItemList: [],
  invoiceTotal: 0,
});


const emit = defineEmits(['close'])

const checkClick = () => {
  store.commit("TOGGLE_INVOICE");
};

const addItem = () => {
  invoiceData.value.invoiceItemList.push({
    id: uid(),
    itemName: "",
    price: 0,
    qty: "",
  })
}
const deleteInvoiceItem = (id) => {
  invoiceData.value.invoiceItemList = invoiceData.value.invoiceItemList.filter(item => item.id !== id)
}

onMounted(() => {
  const currentDate = new Date();
  invoiceData.value.invoiceDate = currentDate.toISOString().split('T')[0];
});

watch(
  () => invoiceData.value.paymentTerms,
  (newPaymentTerms) => {
    const futureDate = new Date();
    invoiceData.value.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(newPaymentTerms));
    invoiceData.value.paymentDueDate = futureDate.toISOString().split('T')[0];
  }
);
</script>

<style scoped>
.form-container {
  box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.form-container::-webkit-scrollbar {
  display: none;
}</style>
