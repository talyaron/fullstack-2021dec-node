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

export interface SecretListProps{
    secretArray: secretProps[]
}