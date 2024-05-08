import { Subject } from "./subject"

export interface Student {
    "username": string,
    "role": string,
    "gender": string,
    "age": number,
    "msisdn": number,
    "password": string,
    "userId": number
    "subjects": Subject[]
}
