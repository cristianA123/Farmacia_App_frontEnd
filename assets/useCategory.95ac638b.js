const o=()=>{const t="https://http-nodejs-production-3df3.up.railway.app";return{getCategories:async()=>(await(await fetch(`${t}/api/category`)).json()).categorias}};export{o as u};
