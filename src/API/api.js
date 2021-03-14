import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "5ce275ee-059a-42ae-a7b0-2e0c6ed12211"}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    }
}
