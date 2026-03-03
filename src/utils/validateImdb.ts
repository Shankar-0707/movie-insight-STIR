// Here I am writing regex for valid input so that Imdb must start with tt and 7-9 character

export const validateImdbId = (id: string): boolean => {
    if(!id) return false; // if there is no id 

    const trimmed = id.trim(); // we are trimiming the id so to remove extra avoidable whitespaces
    const regex = /^tt\d{7,9}$/; // validation start with tt

    return regex.test(trimmed);
}