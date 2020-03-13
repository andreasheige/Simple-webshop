import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        forSale: [
            { invId: 1, name: 'An item', image: '//placeholder.it/20', price: 999 },
            { invId: 2, name: 'Thing', image: '//placeholder.it/20', price: 1499 },
            { invId: 3, name: 'Doo-dad', image: '//placeholder.it/20', price: 499 },
            { invId: 4, name: 'Other thing', image: '//placeholder.it/20', price: 299 },
        ],
        inCart: [],
    },
    getters: {
        forSale: state => state.forSale,
        inCart: state => state.inCart,
    },
    mutations: {
        ADD_TO_CART(state, invId) {
            state.inCart.push(invId);
        },
        REMOVE_FROM_CART(state, index) {
            state.inCart.splice(index, 1);
        }
    },
    actions: {
        addToCart(context, invId) {
            context.commit('ADD_TO_CART', invId);
        },
        removeFromCart(context, index) {
            context.index('REMOVE_FROM_CART', index);
        },
    },

});