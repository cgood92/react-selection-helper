/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import SelectableList from './index'

// Mock document.getSelection()
document.getSelection = () => ({ removeAllRanges: () => {} })

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const metaKey = { metaKey: true }
const shiftKey = { shiftKey: true }

function TestSelection(props) {
	const childrenProps = {}
	this.wrapper = shallow(
		<SelectableList
			ids={ids}
			{...props}
			render={_childrenProps => {
				Object.assign(childrenProps, _childrenProps)
				return null
			}}
		/>,
	)
	this.childrenProps = childrenProps
	return this
}
TestSelection.prototype.select = function(id) {
	return e => {
		this.childrenProps.onSelect(id)(e)
		this.wrapper.update()
		return this
	}
}
TestSelection.prototype.selectAll = function() {
	this.childrenProps.onSelectAll()
	this.wrapper.update()
	return this
}
TestSelection.prototype.getSelected = function() {
	return this.childrenProps.selectedIds
}
TestSelection.prototype.setProps = function(props) {
	this.wrapper.setProps(props)
	this.wrapper.update()
	return this
}

describe('selecting', () => {
	test('selecting a single asset', () => {
		const _test = new TestSelection()
		const e = {}
		expect(
			_test
				.select(1)(e)
				.getSelected(),
		).toEqual([1])

		// Select another one
		expect(
			_test
				.select(2)(e)
				.getSelected(),
		).toEqual([2])
	})
	test('shift selecting', () => {
		const _test = new TestSelection()
		expect(
			_test
				.select(1)(shiftKey)
				.getSelected(),
		).toEqual([1])

		// Select another one
		expect(
			_test
				.select(10)(shiftKey)
				.getSelected(),
		).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

		// Select another one
		expect(
			_test
				.select(5)(shiftKey)
				.getSelected(),
		).toEqual([1, 2, 3, 4, 5])

		// Select another one
		expect(
			_test
				.select(7)(shiftKey)
				.getSelected(),
		).toEqual([1, 2, 3, 4, 5, 6, 7])

		// Reset without shift
		expect(
			_test
				.select(2)({})
				.getSelected(),
		).toEqual([2])
	})
	describe('control selecting', () => {
		test('normal', () => {
			const _test = new TestSelection()
			expect(
				_test
					.select(4)({})
					.getSelected(),
			).toEqual([4])

			// Select another one
			expect(
				_test
					.select(6)(metaKey)
					.getSelected(),
			).toEqual([4, 6])

			// Select another one
			expect(
				_test
					.select(2)(metaKey)
					.getSelected(),
			).toEqual([4, 6, 2])

			// De-select another one
			expect(
				_test
					.select(6)(metaKey)
					.getSelected(),
			).toEqual([4, 2])

			// Reset without control
			expect(
				_test
					.select(2)({})
					.getSelected(),
			).toEqual([2])
		})
		test('control selecting on only selected value', () => {
			const _test = new TestSelection({
				alwaysSelectOne: true,
			})
			expect(
				_test
					.select(4)({})
					.getSelected(),
			).toEqual([4])
			expect(
				_test
					.select(4)(metaKey)
					.getSelected(),
			).toEqual([4])
		})
	})
	test('shift + cmd + shift', () => {
		const _test = new TestSelection()
		expect(
			_test
				.select(2)({})
				.getSelected(),
		).toEqual([2])

		// shift range selection
		expect(
			_test
				.select(4)(shiftKey)
				.getSelected(),
		).toEqual([2, 3, 4])

		// cmd selection
		expect(
			_test
				.select(6)(metaKey)
				.getSelected(),
		).toEqual([2, 3, 4, 6])

		// add another range
		expect(
			_test
				.select(4)(shiftKey)
				.getSelected(),
		).toEqual([2, 3, 4, 6, 5])
	})
})

test('when removing ids, select the next id', () => {
	const _test = new TestSelection({
		alwaysSelectOne: true,
	})
	expect(
		_test
			.select(4)({})
			.getSelected(),
	).toEqual([4])
	// Select next in line
	_test.setProps({ ids: [1, 2, 3, 5, 6, 7, 8, 9, 10] })
	expect(_test.getSelected()).toEqual([5])
	// Select next in line
	_test.setProps({ ids: [1, 2, 3, 7, 8, 9, 10] })
	expect(_test.getSelected()).toEqual([7])
	// Select last
	_test.setProps({ ids: [1, 2] })
	expect(_test.getSelected()).toEqual([2])
	// All gone
	_test.setProps({ ids: [] })
	expect(_test.getSelected()).toEqual([])
})

test('selectAll', () => {
	const _test = new TestSelection({
		alwaysSelectOne: false,
	})
	// Selects all
	expect(_test.selectAll().getSelected()).toEqual(ids)

	expect(_test.selectAll().getSelected()).toEqual([])
})
