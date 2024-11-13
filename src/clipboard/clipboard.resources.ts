import { Clipboard } from './clipboard.entity'

export class FindClipboardDTO {
    code: string;
    oneVisualization: boolean
}

export function toClipboardDomain(resource: FindClipboardDTO): Clipboard {
    return {
        code: resource.code,
        oneVisualization: resource.oneVisualization
    }
}

export class CreateClipboardDTO {
    content: string;
    oneVisualization: boolean;
}