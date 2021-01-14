const searchUser = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`, {
    headers: {
        'Authorization': `${githubAPI}`
     }
    })
        .then(data => {
            return data.json()
            // console.log(data);
        })
        .then(data => {
            console.log(data[0]);
        })
}

searchUser('danielcortes89')

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This was ${num / 1000} second(s)`)
        }, num)

    })
}

wait(1000).then(resolve => console.log(resolve))
wait(3000).then(resolve => console.log(resolve))