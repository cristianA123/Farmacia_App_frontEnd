import { useRouter } from "vue-router"

const useUser = () => {

    const user = localStorage.getItem('user');

    const API = 'http://localhost:4000'
    const router = useRouter()

    const getUserData = () => {
        return JSON.parse(user);
    }

    const getUsers = async () => {
        const response = await fetch(`${API}/api/user`);
        const data = await response.json();
        return data.usuarios;
    }

    const addUser = async ( data ) => {
        await fetch(`${ API }/api/user`, {
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
                    name: 'list-workers'
                })
            }
        })
    }

    return {
        getUserData,
        getUsers,
        addUser
    }
}

export default useUser