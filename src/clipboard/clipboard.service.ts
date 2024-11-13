import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Clipboard } from './clipboard.entity'



@Injectable()
export class ClipboardService {
    constructor(
        @Inject('CLIPBOARD_REPOSITORY')
        private readonly clipboard: Repository<Clipboard> 
    ){}

    async findAll() {
        const query = await this.clipboard.find();
        if(query.length)
            return null;
        return query;
    }

    async findOne(code) {
        const query = await this.clipboard.findOne({ where: { code: code } });
        return query;
    }

    async create(clipboardEntityDTO: Clipboard) {
        const query = await this.clipboard.save(clipboardEntityDTO);
        return query;
    }
}
