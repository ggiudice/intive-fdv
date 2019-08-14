import { Country } from '@gg/shared/models';

export class User {
    id: number;
    name: string;
    surname: string;
    country: Country;
    birthdate: Date;
}
