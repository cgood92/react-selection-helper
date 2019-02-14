# react-selection-helper

## To install
```
yarn add react-selection-helper
```

## To use
```js
import SelectableList from 'react-selection-helper'

const toId = ({ id }) => id
const List = ({ items }) =>
  <SelectableList
    ids={items.map(toId)}
    render={({ selectedIds, onSelect }) => 
        items.map(({ id, name }) => {
            const isSelected = selectedIds.includes(id)
            return (<li
                    key={id}
                    onClick={onSelect(id)}
                    className={isSelected ? 'selected' : ''}
                >
                    <input
                        type="checkbox"
                        value={id}
                        checked={isSelected}
                        onClick={onSelect(id)}
                    />
                    {name}
                </li>)
        })
    }
  />
```