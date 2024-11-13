import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clipboard {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    code: string;

    @CreateDateColumn({type: 'timestamp'})
    createdAt?: Date;

    @Column({type: 'boolean'})
    oneVisualization: boolean;
}