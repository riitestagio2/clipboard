import { Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { ClipboardService } from './clipboard.service';
import { Response } from 'express';

@Controller('clipboard')
export class ClipboardController {
    constructor(
        private service: ClipboardService
    ){}

    @Get()
    findAll(@Res() res: Response) {
        //const response = this.service.findAll();
        return res.status(200).send('funcionou!');
    }

    // @Get('/:code')
    // findByCode = (req, res) => {}

    // @Post('');
    // create = (req, res) => {}
}
