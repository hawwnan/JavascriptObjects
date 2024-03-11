// console.log('hello')
// console.log('waiting')

// setTimeout(() => {
//     console.log('hello')
// }, 5000)

// console.log('mr bean meme')

// const sum = (a, b) => {
//     console.log(a + b)
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a,b)
// }
// calculator(3, 4, sum)

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data" , dataId)
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })
//pyramid of doom
//callback hell

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('In Promise')
//         resolve('success')
//     })
// }

// let promise = getPromise()
// promise.then((res) => {
//     console.log('promise fulfilled' + ' ' + res)
// })

// promise.catch((err) => {
//     console.log('error')
// })

// async function hello() {
//     console.log('hello')
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('weather data');
//             resolve(200);
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data' , dataId)
            resolve('success')
        }, 2000)
    })
}

// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }

(async function() {
    await getData(1)
    await getData(2)
    await getData(3)
})()