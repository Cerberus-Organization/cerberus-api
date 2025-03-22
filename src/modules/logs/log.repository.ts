import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum LogStatus {
    SUCCESS = "Success",
    ERROR = "Error"
}

@Entity()
export class LogRepository{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    status:LogStatus;

    @Column()
    information:string;

    @Column()
    time:Date;

}