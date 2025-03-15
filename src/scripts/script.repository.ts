import { Column, PrimaryGeneratedColumn } from "typeorm";

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