class Api {
    async sendMail(data) {
        return await fetch('https://api.stg.blurbay.com/api/v1/blog/social-calculator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify({
                token: '289de5d3dc64a3c0240740cc48e457e3',
                ...data,
            }),
        })
    }
}

const api = new Api()

export default api