import { useRouter } from "vue-router"
import { ref } from 'vue';


const useCategary = () => {
    
    const API = 'http://localhost:4000'


    const router = useRouter()

    const getCategaries = async () => {
        const response = await fetch(`${ API }/api/category/`)
        const data = await response.json()
        return data.categorias
    }

    const getCategaryById = async ( id ) => {
        const response = await fetch(`${API}/api/Categarys/${id}`);
        const data = await response.json();
        return data.Categary;
    }

    const addCategary = async ( data ) => {
        await fetch(`${ API }/api/category/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('idToken')
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) { 
                router.push({
                    name: 'list-categories'
                })
            }
        })
    }

    const deleteCategary = ( id ) => {
        fetch(`${API}/api/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-token': localStorage.getItem('idToken')
            }   
        })
        .then(res => {
            if (res.ok) { 
                console.log("HTTP request successful")
                router.go() 
            }
        })
    }

    const goToUpdateCategary = ( id ) => {
        router.push({
            name: 'update-Categary',
            params: { id }
        })
    }

    const updateCategary = ( id, data ) => {
        fetch(`${API}/api/category/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('idToken')
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) { 
                console.log("HTTP request successful")
                router.push({
                    name: 'list-Categarys'
                })
            }
        })
    }

    const goToInfoCategary = (id) => {
        console.log(id)
        router.push({
            name: 'info-Categary',
            params: { id }
        })
    }

    const cancelActions = () => {
        router.push({ name: 'list-categories' })
    }

    return {
        addCategary,
        deleteCategary,
        goToUpdateCategary,
        cancelActions,
        getCategaries,
        getCategaryById,
        updateCategary,
        goToInfoCategary
    }
}

export default useCategary