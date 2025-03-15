import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('🧩 Scripts')
@Controller('script')
export class ScriptController {

    @Get()
    getAll(){

    }

}
