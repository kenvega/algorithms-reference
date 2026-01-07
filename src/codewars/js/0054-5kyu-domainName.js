// 5kyu
// https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// my solution (is not considering if there are subdomains)
function domainName(url){
  // check and remove if http://
  // check and remove if https://
  // check and remove if www.
  if (url.startsWith('http://')) url = url.slice(7)
  if (url.startsWith('https://')) url = url.slice(8)
  if (url.startsWith('www.')) url = url.slice(4)

  // check until next . and remove everything after that
  url = url.substring(0, url.indexOf('.'))

  return url
}

// to remember
// strings have the method startsWith useful for these cases
// slice will give you everything after that point (doesn't count 0)
// substring can be used to get the first part of the string if used with 0
// indexOf returns the exact index of the character (counting 0). returns -1 if not found
// it is easier to use split instead of substring and indexOf in this case

// other solution I found (wouldn't work for websites like http://www.wowwww.com)
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

