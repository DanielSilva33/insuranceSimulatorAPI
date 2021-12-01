import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users'})
class User {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    number: number;

    @Column()
    zipcode: number;

}

export { User }