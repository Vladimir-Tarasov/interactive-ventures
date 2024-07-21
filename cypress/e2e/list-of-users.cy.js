describe('Testing API of list of users', () => {
    it('should test list of users with gender=male', () => {
        cy.request('Get', 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=male')
            .then(({ status, body }) => {
                expect(status).to.eq(200);
                expect(body).to.have.all.keys('success', 'errorCode', 'errorMessage', 'result');
                expect(body.success).to.be.true;
                expect(body.errorCode).to.eq(0);
                expect(body.errorMessage).to.be.a('null');
                expect(body.result).to.be.an('array');
                body.result.forEach(id => {
                    expect(id).to.be.a('number');
                });
            })
    });

    it('should test list of users with gender=female', () => {
        cy.request('Get', 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=female')
            .then(({ status, body }) => {
                expect(status).to.eq(200);
                expect(body).to.have.all.keys('success', 'errorCode', 'errorMessage', 'result');
                expect(body.success).to.be.true;
                expect(body.errorCode).to.eq(0);
                expect(body.errorMessage).to.be.a('null');
                expect(body.result).to.be.an('array');
                body.result.forEach(id => {
                    expect(id).to.be.a('number');
                });
            })
    });

    it('should test list of users with gender=magic', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=magic',
            failOnStatusCode: false
        })
            .then(({ status, body }) => {
                expect(status).to.eq(400);
            })
    });

    it('should test list of users with gender=McCloud', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=McCloud',
            failOnStatusCode: false
        })
            .then(({ status, body }) => {
                expect(status).to.eq(400);
            })
    });

    it('should test list of users with gender=any', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=any',
            failOnStatusCode: false
        })
            .then(({ status, body }) => {
                expect(status).to.eq(400);
            })
    });

    it('should test list of users with gender= ', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/users?gender= ',
            failOnStatusCode: false
        })
            .then(({ status, body }) => {
                expect(status).to.eq(400);
            })
    });

    it('should test list of users with gender=!!&&%%$$', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=!!&&%%$$',
            failOnStatusCode: false
        })
            .then(({ status, body }) => {
                expect(status).to.eq(400);
            })
    });

    it('should test list of users with gender=MALE', () => {
        cy.request({
            method: 'Get',
            url: 'https://hr-challenge.dev.tapyou.com/api/test/users?gender=MALE',
            failOnStatusCode: false
        })
            .then(({ status, body }) => {
                expect(status).to.eq(400);
            })
    });
})