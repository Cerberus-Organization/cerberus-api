import { Column, PrimaryGeneratedColumn } from "typeorm";

export class DeviceRepository{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    user:string;

    @Column()
    ip:string;

    @Column()
    location:string;

}