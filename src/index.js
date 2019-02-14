import { Component } from 'react'
import { array, func, bool } from 'prop-types'

const isCtrl = e => e.metaKey || e.ctrlKey
const isShift = e => e.shiftKey

const keys = {
	shiftKey: 'shiftKey',
	metaKey: 'metaKey',
}

class SelectableList extends Component {
	static propTypes = {
		ids: array,
		render: func,
		children: func,
		alwaysSelectOne: bool,
	}
	static defaultProps = {
		ids: [],
		alwaysSelectOne: true,
	}
	state = {
		lastKey: null,
		selectedIds: new Set(),
		shiftSelection: new Set(),
		pivotIndex: null,
	}
	static getDerivedStateFromProps(props, prevState) {
		const { alwaysSelectOne, ids } = props
		const { selectedIds, pivotIndex } = prevState
		// If nothing has been selected, then select the first.  Also works for if selectedId's in state are no longer in props
		if (alwaysSelectOne && ids.length > 0 && !ids.some(id => selectedIds.has(id))) {
			if (pivotIndex >= ids.length) {
				const lastIndex = ids.length - 1
				const last = ids[lastIndex]
				return {
					pivotIndex: lastIndex,
					selectedIds: new Set([last]),
				}
			}
			return {
				pivotIndex,
				selectedIds: new Set(ids.slice(pivotIndex, pivotIndex + 1)),
			}
		}
		if (ids.length === 0) {
			return {
				pivotIndex: null,
				selectedIds: new Set(),
			}
		}
		return null
	}
	handleSelect = id => e => {
		const { ids, alwaysSelectOne } = this.props
		const newPivotIndex = ids.indexOf(id)
		// Shift key -----------------
		if (isShift(e)) {
			// Best solution I've found so far, to remove selection when shift clicking
			// Source: https://stackoverflow.com/questions/1527751/disable-text-selection-while-pressing-shift
			document.getSelection().removeAllRanges()
			this.setState(({ lastKey, pivotIndex, selectedIds, shiftSelection }) => {
				const newIndex = ids.indexOf(id)
				// Something is missing... handle gracefully
				if (pivotIndex === -1 || newIndex === -1) {
					return {
						selectedIds: new Set([id]),
						lastKey: keys.shiftKey,
					}
				}
				const diff = pivotIndex - newIndex
				const newIds = new Set(selectedIds)
				let slice = null
				if (diff > 0) {
					slice = ids.slice(newIndex, pivotIndex + 1)
				} else {
					slice = ids.slice(pivotIndex, newIndex + 1)
				}
				if (lastKey === keys.shiftKey) {
					// Clear old values
					;[...shiftSelection].forEach(id => newIds.delete(id))
				}
				const newShiftSelection = new Set(slice)
				// Add shift selection to selectedIds
				slice.forEach(id => newIds.add(id))
				return {
					selectedIds: newIds,
					lastKey: keys.shiftKey,
					shiftSelection: newShiftSelection,
				}
			})
		}
		// Control key -----------------
		else if (isCtrl(e)) {
			this.setState(({ selectedIds }) => {
				if (alwaysSelectOne && selectedIds.size <= 1 && selectedIds.has(id)) {
					return {}
				}
				if (selectedIds.has(id)) {
					selectedIds.delete(id)
					return {
						pivotIndex: newPivotIndex,
						selectedIds: selectedIds,
						lastKey: keys.metaKey,
					}
				} else {
					return {
						pivotIndex: newPivotIndex,
						selectedIds: selectedIds.add(id),
						lastKey: keys.metaKey,
					}
				}
			})
		}
		// Regular -----------------
		else {
			this.setState({
				pivotIndex: newPivotIndex,
				selectedIds: new Set([id]),
			})
		}
	}
	handleSelectAll = () => {
		const { ids } = this.props
		this.setState(({ selectedIds }) => {
			// All are selected, so de-select them all
			if (selectedIds.size === ids.length) {
				return {
					selectedIds: new Set(),
				}
			}
			return {
				selectedIds: new Set(ids),
			}
		})
	}
	render() {
		const { render, children } = this.props
		const { selectedIds } = this.state
		return (render || children)({
			selectedIds: [...selectedIds],
			onSelect: this.handleSelect,
			onSelectAll: this.handleSelectAll,
		})
	}
}

export default SelectableList
