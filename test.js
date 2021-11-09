
//const {expect} = require("chai")
//const {Calculator} = require("./calc.js")
// import {expect} from "chai";
// import Calculator from "./calc";

const {expect} = require("chai");

const {Calculator} = require("./calc") //import {Calculator} from "./calc.js";

const operations = new Calculator()

describe("test positive ", ()=>{

    it("return true", ()=>{
        expect(true).to.be.equal(true)
    })
    it("return sum of 1 and 5 ", ()=>{
        expect(operations.add(1,5)).to.be.equal(6)
    })
    it("return sum of 10 and 5 ", ()=>{
        expect(operations.add(10,5)).to.be.equal(15)
    })
    it("return multiply of 1 and 5 ", ()=>{
        expect(operations.multiply(1,5)).to.be.equal(5)
    })
    it("return multiply of 0 and 5 ", ()=>{
        expect(operations.multiply(0,5)).to.be.equal(0)
    })
    it("return multiply of 1 and 5 ", ()=>{
        expect(operations.div(10,5)).to.be.equal(2)
    })
    it("return multiply of 0 and 5 ", ()=>{
        expect(operations.div(500,5)).to.be.equal(100)
    })

})

describe("negative testing", ()=>{
    it("use only numbers", ()=> {
        expect(operations.add("str", 4)).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.add("8", "4")).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.add(0, "srt")).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.multiply("str", 4)).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.multiply("str", "40")).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.multiply(0, "srt")).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.div("str", 4)).to.be.equal(false)
    })
    it("use only numbers", ()=> {
        expect(operations.div("str", "4")).to.be.equal(false)
    })
    it("divide by zero ...", ()=> {
        expect(operations.div(10, 0)).to.be.equal(false)
    })
    it("  ...", ()=> {
        expect(operations.add("10", "0")).to.be.equal(false)
    })
})
