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

let longestEmail = (arr, prop) => {
    return arr.reduce((acc, user) => {

        let key = user[prop]
        let hold = prop
        console.log(key);
        // return key

        console.log(acc)
        if(!acc[prop]){
            acc[hold] = key
        }

        console.log(acc[hold].length);
        // user.email.length

        if(acc[hold].length < user.email.length){
            acc[hold] = user.email
        }

        return acc
        // if(acc[key].length > user[key].length){
        //     return acc[key] = user[key]
        // }



        // if (typeof acc[user.email] === 'undefined') {
        //     acc = {value: user.email}
        // }
        // if (acc.value.length > user.email.length) {
        //     acc.value = user.email
        // }

    }, {})
}

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





// const bonus = users.reduce((acc, user) => {
//     let fill = user.languages.filter((item ) => {
//         return !acc.includes(item)
//     })
//     // fill.forEach((item) => acc.push(item))
// }, [])




console.log(longestEmail(users, 'email').email);