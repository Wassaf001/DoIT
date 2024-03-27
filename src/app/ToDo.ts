export class ToDo {
    sno: number;
    title: string;
    desc: string;
    active: boolean;

    constructor(sno: number = 0, title: string = '', desc: string = '', active: boolean = false) {
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}
