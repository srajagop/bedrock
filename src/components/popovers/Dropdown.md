```js
import Button from './../buttons/Button';
import Menu from './Menu';
import MenuItem from './MenuItem';

<Dropdown position='down'
    onShow={() => console.log('dropdown open')} 
    onClose={() => console.log('dropdown closed')}
    onSelect={v => console.log('selected value: ' + v)}>
    
    <Button variant='primary' label='Menu' />
    <Menu >
        <MenuItem value='action'>Action</MenuItem>
        <MenuItem value='another'>Another action</MenuItem>
        <MenuItem value='disabled' disabled={true}>Disabled action</MenuItem>
        <MenuItem value='else'>Something else here</MenuItem>
    </Menu>
</Dropdown>
```

## Split button

```js
import Menu from './Menu';
import MenuItem from './MenuItem';
import SplitButton from './../buttons/SplitButton';

<Dropdown>
    <SplitButton variant='primary' label='Menu' />
    <Menu>
        <MenuItem value='action'>Action</MenuItem>
        <MenuItem value='another'>Another action</MenuItem>
        <MenuItem value='disabled' disabled={true}>Disabled action</MenuItem>
        <MenuItem value='something'>Something else here</MenuItem>
    </Menu>
</Dropdown>
```
