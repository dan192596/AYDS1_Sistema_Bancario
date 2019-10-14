const assert = require("assert");
const request = require("supertest");
const app= require("../src/app");

describe("Example on Test",() =>{
	it("Handles GET request /:doc/update/:id",  function(done){
		request(app).get('/1/update/1')
		.expect(200,done)
	});
});