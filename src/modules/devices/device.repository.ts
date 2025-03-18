import { AfterInsert, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DeviceRepository{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:string;

    @Column({default: 'user'})
    user:string;

    @Column({default: '127.0.0.1'})
    ip:string;

    @Column({default: 'Not Found'})
    location:string;

    @Column({default: 'Unknow'})
    os:string;

}