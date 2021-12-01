import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'seguro'})
class Seguro {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}

export { Seguro }