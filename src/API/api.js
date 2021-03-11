import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "72c99d8b-fc88-4f20-8d1d-f4ec70ba255d"}
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
