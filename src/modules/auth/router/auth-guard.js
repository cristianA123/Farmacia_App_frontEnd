const isAuthenticatedGuard =  ( to, from, next ) => {
    const status = localStorage.getItem( 'status' )
    if ( status === 'autenticated' ) next()
    else next({ name: 'login' })
}

export default isAuthenticatedGuard