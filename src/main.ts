import { Observable, Subject, ReplaySubject, from, of, range, pairs, interval, generate, empty, throwError, merge, pipe } from 'rxjs';
import { map, filter, switchMap, reduce, flatMap, concatAll, publish, tap, catchError } from 'rxjs/operators';
import { List } from './list-exampls'
import { getDupCounts,getDupCounts1, checkForPrime, primeFactors } from './algorithm-module'
import { buttonsWithVar,buttonsWithVarIife, 
        otherNames, names, multiGreet , 
        gatherData, createList, userFetch,
        getDaysInMonth,compressString,deCompressString} from '../src/Es6TsDemo'
import {checkIndexOf, checkLastIndexOf, rangeNew} from './arrayMethods'
import 'bootstrap';
import './main.scss';


let numbers = [1, 4, 5, 6, 10, 8, 15]
let source = Observable.create()

class MyObserver {
    next(value) {
        console.log(`value $value`)
    }

    error(e) {
        console.log(`error $e`)
    }
    complete() {
        console.log(`complete!`)
    }
}

of(1, 2, 3).subscribe(x => { console.log(x) })
from([1, 2, 4, 5, 8]).subscribe(x => { console.log(x) })

const foo = { a: 1, b: 2 };
pairs(foo)
    .subscribe(x => { console.log(x) });


function* listIterator(list: List) {
    for (let i = 0; i < list.size; i++) {
        yield list.get(i)
    }
}

const myList = new List()
myList.add(1)
myList.add(2)

from(listIterator(myList)).subscribe(x => { console.log(`from Iterator ${x}`) })

range(10, 10).subscribe(x => { console.log(`from range ${x}`) })

/*interval(1000) 
  .subscribe(x=>{console.log(x)})*/

/*const a$ = interval(500).pipe(map(x => `A${x}`))
const b$ = interval(1500).pipe(map(x => `B${x}`))

merge(a$, b$).subscribe(a => console.log(a))*/

//generate example

generate(
    1,           // start with this value
    x => x < 10, // condition: emit as long as a value is less than 10
    x => x * 2     // iteration: double the previous value
).subscribe(x => { console.log(`generator ${x}`) })

//empty example

empty().subscribe()

//throwError example

/*throwError('error')
    .subscribe();*/

//pipe example    

const filterOutEvens = filter((x: number) => x % 2 === 0);
const sum = reduce((acc, next) => acc + next, 0);
const doubleBy = x => map((value: number) => value * x);

const complicatedLogic = pipe(
    filterOutEvens,
    doubleBy(2),
    sum
)

//flatmap and concateAll example
range(10, 5).pipe(complicatedLogic).subscribe(x => console.log(x))

const ObsOfOb = from([of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)])
ObsOfOb.pipe(flatMap(v => v)).subscribe(v => console.log(v))
ObsOfOb.pipe(concatAll()).subscribe(v => console.log(v))

//multicast publish example

const publishSource = interval(1000);
const example = publishSource.pipe(
    //side effects will be executed once
    tap(_ => console.log('Do Something!')),
    //do nothing until connect() is called
    publish()
);

const subscribe = example.subscribe(val =>
    console.log(`Subscriber One: ${val}`)
);
const subscribeTwo = example.subscribe(val =>
    console.log(`Subscriber Two: ${val}`)
);

//call connect after 5 seconds, causing source to begin emitting items
/* setTimeout(() => {
   example.connect();
 }, 5000)*/


//catchError example

/* function getJSON(arr) { 
    return from(arr).pipe(map( JSON.parse(arr) ), catchError(x => of({ error: "There was an error parsing JSON" }))) 
}

const caught$ = getJSON(['{"1":"1", "2": "2"}', '{"1":"1"}']) */
//caught$.subscribe(json => console.log(" Parsed JSON: "​, json), err => console.log(err.message));

//All Working Codes
/*
let dupCOunts = getDupCounts1([3,4,5,4,5,5,2,7,6])
console.log(`Dulicate counts ${dupCOunts}`)

console.log(checkForPrime(5))

console.log(primeFactors(21))
*/

/* let btnWithVarElem = document.getElementsByClassName("btnWithVar")
console.log(btnWithVarElem)
buttonsWithVarIife(3,btnWithVarElem[0])

let btnWithVarIifeElem = document.getElementsByClassName("btnWithVarIife")
buttonsWithVarIife(3,btnWithVarIifeElem[0])

console.log(otherNames)


multiGreet('Charlie','Rose','Shawn')

let btnElments = document.querySelectorAll('button')
gatherData(btnElments)


let menuItems = [
    {
        "name": "Food",
        "iconName": "food-icon",
        "targetUrl": "http://myfood-service.com"
    },
    {
        "name": "Gas",
        "iconName": "gas-icon",
        "targetUrl": "http://mygas-service.com"
    },
    {
        "name": "Pharmacy",
        "iconName": "pharmacy-icon",
        "targetUrl": "http://mypharmacy-service.com"
    }
],
menuTargetElement = document.getElementsByClassName('listItems')

createList(menuItems,{"className": "btn btn-success"},menuTargetElement[0]) */

let fatArrow =():void =>{
    console.log(this)
}

fatArrow()

//userFetch()

console.log(`indexOf Method`,checkIndexOf(34))
console.log(`LastIndexOf Method`,checkLastIndexOf(34))
console.log(`Range:`, rangeNew(10,25))


/* let gridItems = [
    {
        "name": "Food",
        "iconName": "food-icon",
        "targetUrl": "http://myfood-service.com",
        "className": "box1"
    },
    {
        "name": "Gas",
        "iconName": "gas-icon",
        "targetUrl": "http://mygas-service.com",
        "className": "box2"
    },
    {
        "name": "Pharmacy",
        "iconName": "pharmacy-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box3"
    },
    {
        "name": "Transportation",
        "iconName": "trans-icon",
        "targetUrl": "http://myfood-service.com",
        "className": "box4"
    },
    {
        "name": "Ferry",
        "iconName": "ferry-icon",
        "targetUrl": "http://mygas-service.com",
        "className": "box5"
    },
    {
        "name": "Bus",
        "iconName": "bus-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box6"
    },
    {
        "name": "Car",
        "iconName": "car-icon",
        "targetUrl": "http://myfood-service.com",
        "className": "box7"
    },
    {
        "name": "Bike",
        "iconName": "bike-icon",
        "targetUrl": "http://mygas-service.com",
        "className": "box8"
    },
    {
        "name": "Path",
        "iconName": "path-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box9"
    },
    {
        "name": "Taxi",
        "iconName": "taxi-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box10"
    },
    {
        "name": "Uber",
        "iconName": "uber-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box11"
    },
    {
        "name": "iPhone",
        "iconName": "iphone-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box11"
    },
    {
        "name": "Samsung",
        "iconName": "samsung-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box12"
    },
    {
        "name": "Network",
        "iconName": "network-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box13"
    },
    {
        "name": "Roads",
        "iconName": "road-icon",
        "targetUrl": "http://mypharmacy-service.com",
        "className": "box14"
    }
],
gridTargetElement = document.getElementsByClassName('grid-wrapper')

createList(gridItems,{},gridTargetElement[0]) */

console.log(getDaysInMonth(7,2018))

let points = [40, 100, 1, 5, 25, 10];
points.sort((a, b)=>{return a-b})
console.log(points)
points.sort((a, b)=>{return b-a})
console.log(points)

console.log(compressString('ffffggggedddddtts'))
console.log(deCompressString('4f4g1e5d2t1s'))