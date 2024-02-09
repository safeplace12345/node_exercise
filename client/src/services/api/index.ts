export class ApiGateway {
    url: string;

    constructor(url: string) {
        this.url = url
    }

    async getMessageQueue(senderId: number, recipientId: number,  callBack: Function) {
        const url = `${this.url}/users/queue/?sender=${senderId}&receiver=${recipientId}`
        try {
            const response = await fetch(url)
            const { queue } = await response.json()
            if (queue) {
                callBack(queue)
            }
            console.log({ queue })
        } catch (error) {
            console.log(error)
        }

    }

    async getFavorites(uId: number, callBack: Function) {
        const url = `${this.url}/users/favorites/${uId}`
        try {
            const response = await fetch(url)
            const { users } = await response.json()
            if (users) {
                callBack(users)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getCurrentUser(uId: number, callBack: Function) {
        const url = `${this.url}/users/${uId}`
        try {
            const response = await fetch(url)
            const { user } = await response.json()
            if (user) {
                callBack(user)
            }
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

export const api = new ApiGateway('http://127.0.0.1:5000')