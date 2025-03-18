import { ApiProperty } from "@nestjs/swagger";

export class CreateScriptDto{

    @ApiProperty()
    name:string;

    @ApiProperty()
    active:boolean;

    @ApiProperty()
    repeat:boolean;  
}