import { ApiProperty } from "@nestjs/swagger";
import { LogStatus } from "../log.repository";

export class CreateLogDto{

    @ApiProperty()
    status:LogStatus;

    @ApiProperty()
    information:string;

    @ApiProperty()
    time:Date;
        
}