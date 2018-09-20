export class List {
    private _myList: any[] = []

    add = (item: any): void => {
        this._myList.push(item)
    }
    get = (idx: number): any => {
        return this._myList[idx]
    }
    get size(): number {
        return this._myList.length;
    }

}