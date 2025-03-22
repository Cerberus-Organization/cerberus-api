import { ApiProperty } from "@nestjs/swagger";
import { LogStatus } from "../log.repository";

export class LogDto{

    @ApiProperty()
    id:number;

    @ApiProperty()
    status:LogStatus;

    @ApiProperty()
    information:string;

    @ApiProperty()
    time:Date;
        
}