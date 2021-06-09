const { expect } = require('chai');

const { BN } = require('@openzeppelin/test-helpers');

const Minter = artifacts.require('Minter')

contract('Minter', function([owner, other]) {
	beforeEach(async function() {
		this.minter = await Minter.new([owner], 1, {from: owner});
	});

	it('validate a simple transaction', async function() {
		await this.minter.validate_transfer(new BN('1'), other, new BN('1000000'));

		// TODO: Check balance
	})
})
