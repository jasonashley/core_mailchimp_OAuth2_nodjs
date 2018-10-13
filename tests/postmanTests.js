pm.test("Request was successful", function() {
  pm.response.to.be.success;
});

pm.test("Expected Metadata properties are present", function() {
  let json = pm.response.json();
  pm.expect(json).to.have.property("dc");
  pm.expect(json).to.have.property("api_endpoint");
  pm.expect(json).to.have.property("login");
  pm.expect(json).to.have.property("user_id");
  pm.response.to.be.success;
});
