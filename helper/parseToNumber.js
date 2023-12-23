import ParseNumberException from "./ParseNumberException";

function parseToNumber(value){
    if(!value){
        throw new ParseNumberException(`${value} is not a NUMBER`)
    }

    return Number(value)
}

export {
    parseToNumber,
} 