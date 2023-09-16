function normalizeURL(urlString) {
    const urlObj = new URL(urlString)

    //for test 1
    // return `${urlObj.hostname}${urlObj.pathname}`

    //for test 1 and 2 dono k liye 
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length>0 && hostPath.slice(-1) == '/') {
         return hostPath.slice(0, -1)
    }
    else {
        return hostPath
    }
}




// exporting normalizeURL
module.exports = {
    normalizeURL
}
