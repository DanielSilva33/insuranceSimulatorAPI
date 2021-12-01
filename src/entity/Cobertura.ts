import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'coberturas'})
class Cobertura {

    @PrimaryColumn()
    id: number;

    @Column()
    seguro_id: string;

    @Column()
    name: string;

    @Column()
    fator: string;
}

export { Cobertura }