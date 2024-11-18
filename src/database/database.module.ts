import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.providers'

@Module({
    exports: [ ...DatabaseProviders ],
    providers: [ ...DatabaseProviders ]
})
export class DatabaseModule {}
