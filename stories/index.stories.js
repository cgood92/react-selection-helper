import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import SelectableList from '../src'

const selectedStyles = {
	backgroundColor: 'lightblue',
}

const itemStyles = {
	marginLeft: 0,
	padding: 8,
	listStyle: 'none',
	border: '1px solid black',
}

const listStyles = {
	margin: '0 8px',
	padding: 0,
}

class List extends Component {
	state = {
		items: this.props.items,
	}
	remove = ids => () => {
		this.setState(({ items }) => {
			return {
				items: items.filter(({ id }) => !~ids.indexOf(id)),
			}
		})
	}
	render() {
		const { items } = this.state
		return (
			<div>
				<header
					style={{
						margin: 8,
					}}
				>
					Click on items in the following list (note: you can use shift and control clicks)
				</header>
				<SelectableList
					ids={items.map(toId)}
					alwaysSelectOne={boolean('alwaysSelectOne', true)}
					render={({ selectedIds, onSelect }) => (
						<div>
							<button onClick={this.remove(selectedIds)}>Remove selected</button>
							<ul style={listStyles}>
								{items.map(({ id, label }) => (
									<li
										key={id}
										onClick={onSelect(id)}
										style={Object.assign(
											{},
											itemStyles,
											~selectedIds.indexOf(id) && selectedStyles,
										)}
									>
										{label}
									</li>
								))}
							</ul>
						</div>
					)}
				/>
			</div>
		)
	}
}

const createItem = props => ({
	id: `${Math.random()}`,
	label: 'Item',
	...props,
})

const items = new Array(10).fill(0).map((item, i) => createItem({ label: `Item ${i}` }))

const toId = ({ id }) => id
storiesOf('SelectableList', module)
	.addDecorator(withKnobs)
	.add('default', () => <List items={items} />)
