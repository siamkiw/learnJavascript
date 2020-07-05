// axios
//     .get('https://jsonplaceholder.typicode.com/posts/')
//     .then((res) => {
//         console.log(res.data);
//         for (const el of res.data) {
//             console.log(el);
//         }
//     })
//     .catch((err) => {
//         console.log('IN CATCH')
//         console.log(err);

// })

// function getPost() {
//     return axios.get('https://jsonplaceholder.typicode.com/posts/')
// }

// getPost().then((res) => {
//     console.log(res.data)
//     res.data.forEach(el => {
//         console.log(el)
//     });
// })

async function getPost2() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    console.log(res.data)
}

getPost2()
    .catch((err) => {
        console.log('IN CATCH', err)
    })

async function getPost3() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        console.log(res.data)
    } catch (err) {
        console.log('IN CATCH', err)
    }
}

getPost3()