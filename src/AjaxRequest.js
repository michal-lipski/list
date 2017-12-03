import * as axios from "axios";

const key = "stOSRSpi4nJYGgTkeW9zyA";
const secret = "ZDU1Th4rLk2QFr1d89EPuoeR95al09hcpoaoqKd1ig";


class AjaxRequest {
    ajax(url) {
        const yqlUrl = "http://query.yahooapis.com/v1/public/yql";
        let goodReadsURL = `${url}&key=${key}&user_id=${secret}&page=1`;
        let q = `select * from xml where url="${goodReadsURL}"`;

        return axios.get(yqlUrl, {
            params: {
                q: q,
                format: "json"
            }
        });
    }
}

const searchBook = (query) => {
    let yqlAjax = new AjaxRequest();
    const goodReadsURL = `https://www.goodreads.com/search/index.xml?q=${query}`;
    yqlAjax.ajax(goodReadsURL)
        .then((yqlResponse) => {
            let book = yqlResponse.data.query.results.GoodreadsResponse.search.results.work[0];
            console.log(book);
            console.log(book.average_rating);
            console.log(book.best_book.image_url);
        }).catch((error) => {
        alert(`error: ${error}`);
    });
};

export default searchBook