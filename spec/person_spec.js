
const { Person } = require('./spec.helper')

describe("Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    });

    it("should have weight of 90 kg", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186 cm", () => {
        expect(person.height).to.equal(186);
    });

    it("should calculate BMI value using metric method", () => {
        person.calculate_metric();
        expect(person.bmiValue).to.equal(26.01);
    });

    it("should have a BMI Message", () => {
        person.calculate_metric();
        expect(person.bmiMessage).to.equal('Your BMI is 26.01 and you are Overweight');
    });
});

describe("Person", () => {
    let person = new Person({
        weight: 180,
        height: 71
    });

    it("should have weight of 180 lbs", () => {
        expect(person.weight).to.equal(180);
    });

    it("should have height of 71 in", () => {
        expect(person.height).to.equal(71);
    });

    it("should calculate BMI value using imperial method", () => {
        person.calculate_imperial();
        expect(person.bmiValue).to.equal(25.10);
    });

    it("should have a BMI Message", () => {
        person.calculate_imperial();
        expect(person.bmiMessage).to.equal('Your BMI is 25.1 and you are Overweight');
    });
});