import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knowAs: string;
    age: number;
    gender: string;
    creted: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introdaction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
