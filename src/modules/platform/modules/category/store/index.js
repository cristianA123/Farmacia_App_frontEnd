import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {

    const status = ref('autenticating')
    const user = ref( null )
    const token = ref( null )
    const resfreshToken = ref( null )

    function getUserData ( userData, userToken ) {
        status.value = 'autenticated'
        user.value =  userData
        token.value = userToken
        setLocalCredentials( token.value, status.value, user.value )
    };

    function setLocalCredentials ( localToken, localStatus, localUser ) {
        localStorage.setItem( 'idToken', localToken )
        localStorage.setItem( 'status', localStatus )
        localStorage.setItem( 'user', JSON.stringify( localUser ) )
    }

    function clearEntryes () {
        status.value = 'autenticated'
        user.value =  null
        token.value = null
        resfreshToken.value = null
        localStorage.clear()
    }
    return {
        status, user, token, resfreshToken, getUserData, clearEntryes
    }
});