export const transformTitle = (country: string) => {
    return country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();
}

export const transformUppercase = (word: string) => {
    return word.toUpperCase()
}

export const transformUppercaseFirtsLetterWord = (name: string) => {
    const words = name.split(" ")

    let newWords = []
    for(let i = 0; i < words.length;i++){
        let newWord = transformTitle(words[i])
        newWords.push(newWord)
    }

    return newWords.join(" ")

}