const useUser = () => {
    const user = localStorage.getItem('user');

    const getUserData = () => {
        return JSON.parse(user);
    }

    return {
        getUserData
    }
}

export default useUser