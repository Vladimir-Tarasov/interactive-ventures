describe('Testing API of users data', () => {
    it('should testing users data with id=10', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/user/10'
        })
            .then(({ status, body }) => {
                expect(status).to.eq(200);
                expect(body).to.have.all.keys('success', 'errorCode', 'errorMessage', 'result');
                expect(body.success).to.be.true;
                expect(body.errorCode).to.eq(0);
                expect(body.errorMessage).to.be.a('null');
                expect(body.result).to.be.an('array');
                expect(body.result).to.have.all.keys('id', 'name', 'gender', 'age', 'city', 'registrationDate');
                expect(body.result.id).to.eq(10);
                expect(body.result.name).to.be.a('string');
                expect(body.result.gender).to.eq('male');
                expect(body.result.age).to.be.an('number');

            })
    });
})