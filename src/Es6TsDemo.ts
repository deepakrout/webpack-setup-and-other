

export let buttonsWithVar = (count: number, targetElement: Element): void => {

    for (var i = 0; i <= count; i++) {
        var button = makeButton(`button${i}`)
        button.onclick = function () {
            console.log(`var: This is button ${i}.`)
        }
        targetElement.appendChild(button)
    }

}

export let buttonsWithVarIife = (count: number, targetElement: Element): void => {

    for (var i = 0; i <= count; i++) {
        var button = makeButton(`button${i}`)
        button.onclick = (function (buttonNumber) {
            return function () {
                console.log(`var with iife: This is button ${buttonNumber}.`)
            }
        }(i))
        targetElement.appendChild(button)
    }

}

export let buttonsWithLet = (count: number, targetElement: Element): void => {

    for (let i = 0; i <= count; i++) {
        var button = makeButton(`button${i}`)
        button.onclick = function () {
            console.log(`let: This is button ${i}.`)
        }
        targetElement.appendChild(button)
    }

}

export let gatherData = (htmlElements: any): void => {
    htmlElements.forEach(element => {
        let tmpItem = {
            "itemIcon": element.dataset.icon
        }
        console.log(tmpItem)
    });
}

let makeButton = (caption): any => {
    let button = document.createElement('button');
    button.innerText = caption;
    button.dataset.icon = "base.gif"
    return button;
}

export let createList = (listElements: any[], configOptions: any, targetElement: Element): void => {
    let ulElem = makeList(listElements,configOptions)
  
    ulElem.addEventListener('click',(e: any)=>{
        if(e.target && e.target.nodeName == "LI") {
            // List item found!  Output the ID!
            console.log("List item ", e.target.innerText);
        }
    })
    targetElement.appendChild(ulElem)
}

let makeList = (items: any[], listOption: any): Element => {
    let ulElement: Element = document.createElement('ul');
    if (listOption.className)
        ulElement.className = listOption.className
    items.forEach(elem => {
        let liElement = document.createElement('li');
        liElement.innerHTML = elem.name
        liElement.dataset.icon = elem.iconName
        liElement.dataset.targetUrl = elem.targetUrl
        if (elem.className)
            liElement.className = elem.className
        ulElement.appendChild(liElement)
    })
    return ulElement;
}

interface PostalAddress {
    street1: string
    street2?: string
    city: string
    state: string
    zip: number
}

export const addressData1: PostalAddress = {
    street1: "12 Main Street",
    // street2: "#2",
    city: 'Franklin Square',
    state: "NY",
    zip: 11010
}

const { street1: st1, street2: st2, city, state, zip } = addressData1

console.log(st1)

export const names = ['Alice', 'Bob', 'Charlie', 'Dana', 'Elvis', 'Fran', 'George', 'Hope']

export const [name1, name2, ...otherNames] = names

export let multiGreet = (...items): void => {
    items.forEach(ele => {
        console.log(`Hello ${ele}`)
    });
}

export { PostalAddress as Address }

export function myFunction() {

}

export let userFetch = () => {
    fetch('http://localhost:3000/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}

export let getDaysInMonth = (month,year) => {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  }

  export let compressString= (str: string): string =>{
      let result: string =''
      let splitString: any[] = str.match(/(.)\1*/g) // ["aaa", "bb", "c", "a", "pppp"]
      splitString.forEach(elem=>{
  //       console.log(elem)
         result = `${result.trim()}${elem.length}${elem.substr(0,1)}`
    //     console.log(elem, result)
      })
      return str.length > result.length ? result : str
  }

  export let deCompressString = (str: string): string =>{
      let result: string='',
          splitString: any[] = str.match(/\d+./g)
      splitString.forEach(elem=>{
          result = `${result}${elem.substr(1,1).repeat(elem.substr(0,1))}`
         // console.log(elem,result)
      })

      return result
  }

  export let random=(num:number):number=>  {
    return Math.floor(Math.random()*(num+1));   
  }

  export let reverseString=(str: string): string =>{
    return Array.from(str).reverse().join('')
  }