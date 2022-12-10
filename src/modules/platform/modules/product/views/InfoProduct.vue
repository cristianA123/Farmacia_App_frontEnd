<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    
    // const API = 'https://backend-testing-production.up.railway.app/api/products';
    const API = 'https://http-nodejs-production-3df3.up.railway.app'

    const router = useRouter()
    const route = useRoute()
    const product = ref({})
    
    console.log('id: '+ route.params.id);
    const getProductById = async () => {
        const response = await fetch(`${API}/${route.params.id}`);
        const data = await response.json();
        product.value = data.product;
        console.log(product)
    }
    console.log(product.value);
    onMounted(() => {
        getProductById()
    })
    
    
    
    </script>
    
    
    <template>
        <section class="section__adduser">
    
            <div class="categorys">
                <span class="categorys__title">Detalle Producto </span>
            </div>
            <div class="info__product__box">
                <img class="info__product_image" :src="product.imagen" alt="">
                <div class="detalle__product">
                    <h3 class="info__product__name">{{product.nombre}}</h3>
                    <h4 class="info__product__price">S/. {{product.precio}}</h4>
                    <p class="info__product__description">{{product.descripcion}}</p>
                    <div class="details__lab">
                   <img src="@/assets/icons/bag-2.svg" alt="" class="lab__icon" >
                    <span class="lab__name"> {{ product.laboratorio }} </span>    
                </div>
                <div class="details__lab">
                   <img src="@/assets/icons/barcode.svg" alt="" class="lab__icon" >
                    <span class="lab__name"> {{ product.vencimiento }} </span>    
                </div>
                </div>
            </div>
        </section>
    </template>
    
    
    
    <style scoped>
    .section__adduser{
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        width: 100%;
    }
    .categorys{
        width: 100%;
        background-color: var(--background-component-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3.2rem;
        border-radius: 10px;
        box-shadow: var(--shadow);
        height: 8rem;
    }
    
    .categorys__title{
        color: var(--color-primary);
        font-size: 2.4rem;
        font-weight: 700;
    }
    .info__product__box{
        display: flex;
        flex-direction: row;
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    .info__product__name{
        
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;

        color: #454459;
    }
    .info__product__price{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */


        color: #FF6464;
    }
    .info__product__description{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #454459;
    }
    .details__lab{
    display: flex;
    align-items: center;
    gap: 4px;
    }
    .info__product_image{
        width: 320px;
        height: 320px;
        margin-left: 87px;
        margin-top: 83px;
        margin-bottom: 120px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
        border-radius: 2px;
    }
    .detalle__product{
        height: 25vh;
        display: flex;
        flex-direction: column;
        margin-top: 120px;
        margin-left: 120px;
        justify-content: space-between;
    }
    </style>