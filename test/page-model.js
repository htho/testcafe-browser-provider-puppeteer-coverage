import {Selector} from 'testcafe';

export default class Page {
    constructor() {
        this.Header = Selector('h1');
        this.Btn = Selector('#btn');
    }
}