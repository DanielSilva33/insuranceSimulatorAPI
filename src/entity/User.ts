import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})
class User {

    @PrimaryGeneratedColumn("increment")
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