const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(user => {
    return user.languages.length > 2
})

let emails = users.map(user => user.email)

let totalAge = users.reduce((acc, user) => {
    return acc + user.yearsOfExperience
}, 0)

// let longestEmail = users.reduce((acc, user) => {
//     // let hold = acc.toString().length
//     if(acc.keys() === 0){
//         return acc = user.email
//     } else {
//         return acc
//     }
//     // return acc
//     // return user.email.length + acc
//     // return acc.toString().length
// }, {})

const over = () => {
    let model = 'g'
    return users.reduce((acc, user) => {
        if(user.email.length > model.length){
            return acc = user.email
        }
    }, model)

}

const names = users.reduce((acc, user) => {
    // console.log(users.length)
    if(user.id === users.length){
        return acc = acc + user.name + '.'
    }
    return acc = acc + user.name + ', '
}, 'The list of instructors are: ')

console.log(names);