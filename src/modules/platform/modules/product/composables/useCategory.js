const useCategory = () => {
    // const API = 'https://backend-testing-production.up.railway.app'
    const API = 'https://http-nodejs-production-3df3.up.railway.app';


    const getCategories = async () => {
        const response = await fetch(`${API}/api/category`);
        const data = await response.json();
        return data.categorias;
    };

    const getEmpresas = async ( id ) => {
        const response = await fetch(`${API}/api/empresa`);
        const data = await response.json();
        return data.empresa;
    }


    return {
<<<<<<< HEAD
        getCategories,
        getEmpresas
    }
}
=======
        getCategories
    };
};
>>>>>>> 1a755dec4b6158315224b4ea08f120e22b3f6a4b

export default useCategory;