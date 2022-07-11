/// <reference types='cypress'/>

// describe('teste youtube', function(){
//    it('input test', function(){
//     cy.visit('/')
//     cy.get('input[id="search"]').type('fifa 22')
//     cy.get('button[id="search-icon-legacy"]').click()
//     // cy.get('#dismissible').click()
//    })

// })

describe("input test", function () {
  it("access input", function () {
    cy.visit("/");
    cy.get("#search-bar").type("fifa,  {enter}").click();
  });

  it("check list", function () {
    cy.get(".video-list").should("have.length", 6);
    cy.get("#playvideo").click();
  });

  it("play video", function () {
    cy.get(".agoraVai")
  });
});
