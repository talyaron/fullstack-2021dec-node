export interface secretProps{
    issue: string,
    img: string
}
export interface factsProps{
    issue: string,
    img: string, 
    trueFact: string,
    wrongFact: string,
}

export interface factsPropsArray{
    factsArray: factsProps[]
}

export interface SecretListProps{
    secretArray: secretProps[]
}
export interface true1{
    img: string,
    fact: string
}
export interface false1{
    img: string,
    fact: string
}
