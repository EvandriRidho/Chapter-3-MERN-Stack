const getArticles = (count) => {
    return fetch("https://dummyjson.com/posts/" + count).then(data => data.json())
}

export default getArticles;