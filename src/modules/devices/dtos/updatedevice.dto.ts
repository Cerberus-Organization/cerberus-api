import { ApiProperty } from "@nestjs/swagger";

export class UpdateDeviceDto{

    @ApiProperty()
    name:string;

    @ApiProperty()
    user:string;

    @ApiProperty()
    ip:string;

    @ApiProperty()
    location:string;

    @ApiProperty()
    os:string;

}