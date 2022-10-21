import Page from './page-model';

fixture `e2e tests`
.page `http://localhost:5000/`
;

const page = new Page();

test('it should render the header element', async t => {
    await t.expect(page.Header.exists).ok();
});

test.skip('it should click the button and increase coverage', async t => {
    await t.click(page.Btn);
});