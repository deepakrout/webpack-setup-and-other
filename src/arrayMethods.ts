//array methods starting with concat
let intArray = Array.from([1, 2, 3], x => x + x);

let newArray = Array(10)

let uniqueArray = [31, 24, 12, 34, 40, 20, 21, 18, 11, 9, 25]

let dupValsInArray = [12, 25, 19, 18, 25, 34, 50, 15, 19, 34, 18]

//Array indexOf 
export let checkIndexOf = (val): any => {
    let uniqueIdx: number, dupIdx: number
    uniqueIdx = uniqueArray.indexOf(val)
    dupIdx = dupValsInArray.indexOf(val)
    return {
        "uniqueIdx": uniqueIdx,
        "dupIdx": dupIdx
    }
}

//Array lastIndexOf
export let checkLastIndexOf = (val): any => {
    let uniqueIdx: number, dupIdx: number
    uniqueIdx = uniqueArray.lastIndexOf(val)
    dupIdx = dupValsInArray.lastIndexOf(val)
    return {
        "uniqueIdx": uniqueIdx,
        "dupIdx": dupIdx
    }
}

//Array find
export let checkFind = (val): any => {
    let uniqueFnd: number, dupFnd: number
    uniqueFnd = uniqueArray.find(val)
    dupFnd = dupValsInArray.find(val)
    return {
        "uniqueFnd": uniqueFnd,
        "dupFnd": dupFnd
    }
}

//Array find
export let checkFindIndex = (val): any => {
    let uniqueFnd: number, dupFnd: number
    uniqueFnd = uniqueArray.findIndex(val)
    dupFnd = dupValsInArray.findIndex(val)
    return {
        "uniqueFndIdx": uniqueFnd,
        "dupFndIdx": dupFnd
    }
}

//Array includes
export let rangeNew=(startFrom: number, len: number): any[] =>{
    return Array.from({length: len}, (v, i) => startFrom+i+1)
}