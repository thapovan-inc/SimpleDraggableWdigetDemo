import { Widget } from './Widget';

export class Container {
    constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}