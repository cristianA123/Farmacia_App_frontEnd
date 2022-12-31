const useCategory = () => {
    // const API = 'https://backend-testing-production.up.railway.app'
    const API = 'http://localhost:4000'


    const getCategories = async () => {
        const response = await fetch(`${ API }/api/category`)
        const data = await response.json()
        return data.categorias
    }

    const getEmpresas = async ( id ) => {
        const response = await fetch(`${API}/api/empresa`);
        const data = await response.json();
        return data.empresa;
    }


    return {
        getCategories,
        getEmpresas
    }
}

export default useCategory