export function searchToObj (search: string) {
    let pairs = search.substring(1).split('&')
    let obj: { [key: string]: string } = {}

    for (let i in pairs) {
        if (pairs[i] === '') continue
        let pair = pairs[i].split('=')
        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
    }

    return obj
}