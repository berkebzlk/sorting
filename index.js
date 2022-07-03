const container = document.querySelector('.container');
const WIDTH = 3
const HEIGHT = 5
const MAX_ARR_LENGTH = 1000

function randomArrGenerator(n, min, max) {
  if(n > MAX_ARR_LENGTH) return Error('100den büyük dizi olamaz')
  const arr = new Array()

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (max - min))) + min
    // return Math.floor(Math.random() * (max - min)) + min
  }

  return arr
}

const dizi = randomArrGenerator(350,1,100)

// creating sticks
function createStick(dizi) {
  for (let i = 0; i < dizi.length; i++) {
    const element = document.createElement('span')
    element.style.width = WIDTH+'px';
    element.style.height = `${dizi[i] * HEIGHT}px`;
    element.style.backgroundColor = 'blue';
    element.classList.add('stick');
    container.appendChild(element);
  }
}
createStick(dizi)
let allSticks = document.querySelectorAll('.stick')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(dizi) {
  console.log(dizi, 'ilk hal')
  for (let i = 0; i < dizi.length; i++) {
    
    for (let j = 0; j < dizi.length - 1 - i; j++) {
      if(dizi[j] > dizi[j+1]) {
        await sleep(1)
        for (let l = 0; l < dizi.length; l++) {
          allSticks[l].style.backgroundColor = 'blue'
        }
        allSticks[j].style.backgroundColor = 'black'
        // allSticks[j+1].style.backgroundColor = 'blue'

        let tmpH = allSticks[j].style.height
        allSticks[j].style.height = allSticks[j+1].style.height
        allSticks[j+1].style.height = tmpH

        allSticks[j].style.backgroundColor = 'blue'
        allSticks[j+1].style.backgroundColor = 'black'

        let temp = dizi[j]
        dizi[j] = dizi[j+1]
        dizi[j+1] = temp
      }
    }
    for (let j = 0; j < dizi.length; j++) {
      allSticks[j].style.backgroundColor = 'blue'      
    }
    
  }
}

bubbleSort(dizi)







































// allSticks = Array.from(allSticks)
// console.log(allSticks[0])
// console.log(allSticks[1])
// console.log(allSticks[2])
// console.log(allSticks[3])
// console.log(allSticks[4])
// console.log(allSticks[5])
// allSticks[j].style.transform = 'translateX(20px)'
        // allSticks[j + 1].style.transform = 'translateX(-20px)'

// function insertionSort(dizi) {
//   let counter = 1;
//   for (let i = 1; i < dizi.length; i++) {
//     const current = dizi[i]
//     let j = i - 1
//     // görsel sıralama
//     while(j >= 0 && dizi[j] > current) {
//       for(let l = counter; l>0; l--) {
//         allSticks[i].style.transform = `translateX(${-20*l}px)` // sonrakini counter * geri al
//     }
//     allSticks[j + counter].style.transform = `translateX(${20}px)`; // ilki 1 ileri al
//     counter++
//       console.log(dizi)
//       dizi[j + 1] = dizi[j]; // current, bir öncekine eşitlensin.
//       j--
//     }
//     console.log(1 + ' j: ' + j)
//     dizi[j+1] = current;
//     counter=0
//   }
//   console.log('dizinin son hali', dizi)
// }
// insertionSort(dizi)


// function selectionSort(dizi) {
//   console.log(dizi)
  
//   for(let i = 0; i < dizi.length; i++) {
//       // Finding the smallest number in the subarray
//       let counter = 0
//       let min = i;
//       for(let j = i+1; j < dizi.length; j++){
//           if(dizi[j] < dizi[min]) {
//             counter++
//             min=j;
//           }
//        }

//        if (min != i) {
//           allSticks[i].style.transform = `translateX(${20 * counter}px)`
//           allSticks[min].style.transform = `translateX(${-20 * counter}px)`
  
//           let tmpStick = allSticks[i];
//           allSticks[i] = allSticks[min];
//           allSticks[min] = tmpStick; 

//           let tmp = dizi[i];
//           dizi[i] = dizi[min];
//           dizi[min] = tmp;
//           console.log(dizi)
//         }
//       }
//       console.log('yeni dizi: ' + dizi)
// }
// selectionSort(dizi)


