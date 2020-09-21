/**
 * Utils
 */

const getData = async (url) => {

    let response = await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .catch(err => err);

    return response;
};

const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`
}

const getCookie = (name) => {

    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;

}

export { getData, setCookie, getCookie };
