const searchUser = (username) => {
    fetch(`https://api.github.com/users/${username}`, {
    headers: {
        'Authorization': `${githubAPI}`
     }
    })
        .then(data => {
            console.log(data);
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