import http from 'k6/http';
// import { sleep } from 'k6';
import data from './test.json';

export default function () {
    for (let i = 0; i < data.length; i++) {
        http.get(`http://example.com/posts/${i + 1}`);
    }
}