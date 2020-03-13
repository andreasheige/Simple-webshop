<template>
    <div>
        <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart {{ numInCart }}</button>

        <div id="shoppingCart" class="modal fade">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Shopping cart</h5>
                    <button class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <tbody>
                            <tr :v-for="item in cart">
                                <td>{{ item.name }}</td>
                                <td>{{ item.price }}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <th>{{ total | dollars }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
                    <button class=" btn btn-primary">Check out</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import  { dollars } from './filters'

export default {
    name: 'shopingcart',
    filters: {
        dollars,
    },
    computed: {
        incart(){
            return this.$store.getters.inCart;
        },
        numInCart(){
            return this.incart.length;
        },
        cart(){
            return this.$store.getters.inCart.map((cartItem)=>{return this.$store.getters.forSale.find((forSaleItems)=> {
                return cartItem === forSaleItems.indId;
            });
            });
        },
    },
};
</script>