const o=()=>{const t="http://localhost:4000";return{getCategories:async()=>(await(await fetch(`${t}/api/category`)).json()).categorias}};export{o as u};
