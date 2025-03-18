import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScriptRepository{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    active:boolean;

    @Column()
    repeat:boolean;

}