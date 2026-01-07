// 6kyu
// https://www.codewars.com/kata/51646de80fd67f442c000013

// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url (the first occurence should be kept)
// Removes any query string parameters specified within the 2nd argument (optional array)

// Examples:
// stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'

// personal note: seems that queryparams like 'a' or 'b' are always 1 char length

// my solution
function stripUrlParams(url, paramsToStrip = []) {
  const queryIndex = url.indexOf("?")

  if (queryIndex === -1) {
    return url
  }

  let response = url.slice(0, queryIndex)

  const queryParams = url.slice(queryIndex + 1)

  const params = queryParams.split("&")

  const aux = {}

  for (let i = 0; i < params.length; i++) {
    const param = params[i]

    if (!aux[param[0]] && !paramsToStrip.includes(param[0])) {
      aux[param[0]] = param[param.length - 1]
    }
  }

  if (Object.entries(aux).length > 0) {
    response += "?"
  }

  response += Object.entries(aux)
    .map(([queryParam, value]) => {
      return `${queryParam}=${value}`
    })
    .join("&")

  return response
}

console.log(stripUrlParams("www.codewars.com?a=1&b=2&a=2")) // 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams("www.codewars.com?a=1&b=2&a=2", ["b"])) // 'www.codewars.com?a=1'
console.log(stripUrlParams("www.codewars.com", ["b"])) // 'www.codewars.com'

// to remember

// other solution from the internet
