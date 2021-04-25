
export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube:string,
    mainLink:string
}
export type PhotosType = {
    small: string,
    large: string
}
export type ProfileType = {
    userId : number | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: ContactsType,
    photos: PhotosType
}
export type UsersType= {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}

