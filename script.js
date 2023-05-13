const btnEl = document.getElementById('btn')
const emojiNameEl = document.getElementById('emoji-name')

const emoji = []

const getEmoji = async() =>{
    let response = await fetch('https://emoji-api.com/emojis?access_key=13690dde057ac789159087a911cf5af8a01aa709')
     data = await response.json()
    

    for (let i=0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
   
}
getEmoji()

btnEl.addEventListener('click', ()=>{
    const randomN = Math.floor(Math.random() * emoji.length)
    btnEl.innerText = emoji[randomN].emojiName
    emojiNameEl.innerText = emoji[randomN].emojiCode
})