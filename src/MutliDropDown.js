import React from 'react'
import Multiselect from 'multiselect-react-dropdown';


function MutliDropDown(props) {
    return (
    <div>
        <Multiselect
        displayValue="name"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={(event) => {
                props.removedropdowndata(event)
            }}

        onSearch={function noRefCheck(){}}
        onSelect={(event) => {
                props.adddropdownvalues(event)
            }}
        options={props.options}
        showCheckbox
        />

    </div>
    )
}

export default MutliDropDown
