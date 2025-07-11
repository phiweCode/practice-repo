const xhr = new XMLHttpRequest();
const url = './news_article.json';  

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) { 
        console.log('JSON loaded successfully'); 
        console.log(xhr.response);
    }else { 
        console.log("failed to load news", xhr.status)
    }
}
