import { createStore } from 'vuex'

export default createStore({
    state: {
        invoiceData: [],
        invoiceModal: null,
        modalActive: false,
        invoicesLoaded: null,
        currentInvoiceArray: null,
        editInvoice: null,
    },
    getters: {
        getModalActive(state) { return state.modalActive }
      },
    mutations: {
        TOGGLE_INVOICE(state) {
            state.invoiceModal = !state.invoiceModal;
        },
        TOGGLE_MODAL(state) {
            state.modalActive = !state.modalActive;
        },
        OPEN_MODAL(state) {
            state.modalActive = false;
        },
        CLOSE_MODAL(state) {
            state.modalActive = true;
        },
    }
})