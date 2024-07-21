describe('Testing API of list of users', () => {
    it('should test list of users with gender=male', () => {
        cy.request('Get', 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=male')
            .then(({ status, body }) => {
                expect(status).to.eq(200);
                expect(body).to.have.all.keys('isSuccess', 'errorCode', 'errorMessage', 'idList');
                expect(body.isSuccess).to.be.true;
                expect(body.errorCode).to.eq(0);
                expect(body.errorMessage).to.be.a('null');
                expect(body.idList).to.be.an('array');
            })
    })

    it('should test list of users with gender=female', () => {
        cy.request('Get', 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=female')
            .then(({ status, body }) => {
                expect(status).to.eq(200);
                expect(body).to.have.all.keys('isSuccess', 'errorCode', 'errorMessage', 'idList');
                expect(body.isSuccess).to.be.true;
                expect(body.errorCode).to.eq(0);
                expect(body.errorMessage).to.be.a('null');
                expect(body.idList).to.be.an('array');
            })
    })
})