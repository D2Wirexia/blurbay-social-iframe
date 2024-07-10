class Api {
    async sendMail(email) {
        return fetch('',  'POST', { email })
    }
}

const api = new Api()

export default api