import {
    describe
} from "mocha"

import {
    expect
} from "chai"

import sinon from "sinon"

import create from './product.adapter';





describe('Simple test suite (with chai):', function () {
    it('1 === 1 should be true', () => {
        expect(create(1, 1)).to.equal(2);
    });
});