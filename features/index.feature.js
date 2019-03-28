const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('using metric method by inputing his weight and height', async () => {

        await browser.fillIn("input[id='weight-in-kgs']", { with: "95" })
        await browser.fillIn("input[id='height-in-cm']", { with: "185" })

        await browser.clickOnButton("button[id='submit_metric']")
        let content = await browser.getContent("span[id='display_met_message']")
        expect(content).to.eql('Your BMI is 27.76 and you are Overweight');
    });

    it('using imperial method by inputing his weight and height', async () => {

        await browser.clickOnButton("button[id='imperial']")
        await browser.fillIn("input[id='weight-in-lbs']", { with: "180" })
        await browser.fillIn("input[id='height-in-ft']", { with: "5" })
        await browser.fillIn("input[id='height-in-in']", { with: "11" })

        await browser.clickOnButton("button[id='submit_imperial']")
        let content = await browser.getContent("span[id='display_imp_message']")
        expect(content).to.eql('Your BMI is 25.1 and you are Overweight');
    });

});


