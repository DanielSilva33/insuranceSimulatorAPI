import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn     } from 'typeorm';
import { Seguro } from './Seguro';

@Entity({ name: 'coberturas'})
class Cobertura {

    @PrimaryColumn()
    id: number;

    @OneToOne(() => Seguro)
    @JoinColumn()
    seguro_id: string;

    @Column()
    name: string;

    @Column()
    fator: string;
}

export { Cobertura }