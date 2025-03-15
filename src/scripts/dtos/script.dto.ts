import { ApiProperty } from "@nestjs/swagger";

export class ScriptDto{

    @ApiProperty()
    id:number;

    @ApiProperty()
    name:string;

    @ApiProperty()
    active:boolean;

    @ApiProperty()
    repeat:boolean;
}