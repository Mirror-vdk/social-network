import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "84b20dbc-0158-43a6-a23d-5c748e05b719"}
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
    },
    login (email,password, rememberMe=false,captcha="") {
        return instance.post(`auth/login`, {email,password, rememberMe,captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    getAboutMe(userId) {
        return instance.get(`profile/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image",photoFile )
        return instance.put (`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put (`profile/`, profile)
    }
}
