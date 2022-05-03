export default interface UserEntity {
    _id?: string;
    name: string,
    lastname: string,
    email: string,
    role: string,
    image: any,
    password?: string,
    blocked: boolean,
}