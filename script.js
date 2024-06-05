

emailsToShow=[]
const mailListEL = document.getElementById('mail-list');

for (let index = 0; index < 10; index++) {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
        console.log(response.data.response);
            const newLi= document.createElement('li')
                newLi.append(response.data.response)
        
            mailListEL.appendChild(newLi)
        
    })

//     emailsToShow.push(result.response)

// 
}

