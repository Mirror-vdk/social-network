import {PhotosType, ProfileType} from "../types/types";
import {instance, ResponseType} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    getAboutMe(userId: number) {
        return instance.get(`profile/` + userId)
    },

    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`profile/`, profile)
    }
}