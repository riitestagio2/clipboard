import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';



@Injectable()
export class ClipboardService {
    constructor(
        @Inject('CLIPBOARD_REPOSITORY')
        private readonly clipboard: Repository<Clipboard> 
    ){}
}
