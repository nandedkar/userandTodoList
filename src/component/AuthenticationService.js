class AuthenticationService {
    registerSuccessfulLogin(username, Password) {
        console.log('authenticationUser called');
        sessionStorage.setItem('authUser', username)
    }
    logout() {
        console.log('logout');
        sessionStorage.removeItem('authUser');
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authUser')
        if (user === null) return false
        return true
    }
}

export default new AuthenticationService();
