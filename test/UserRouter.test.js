const assert = require('assert')
const request = require('supertest')

describe('设备相关API测试', async () =>{
    it('根据用户id查询用户资料', async () => {
        let id = '123'
        await request("http://localhost:3300")
            .get(`/user/get_user_data/${id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function (response) {
                assert.strictEqual(response.body.data.length > 0, true);
            })
    })
})
