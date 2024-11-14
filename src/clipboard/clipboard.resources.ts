import { Clipboard } from './clipboard.entity'

export class FindClipboardDTO {
    code: string;
    oneVisualization: boolean
}

export function toClipboardDomain(resource: CreateClipboardDTO): Clipboard {
    return {
        content: resource.content,
        oneVisualization: resource.oneVisualization
    }
}

export class CreateClipboardDTO {
    content: string;
    oneVisualization: boolean;
}