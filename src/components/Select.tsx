import React, {ChangeEvent} from 'react'
import Select from 'react-select'
import styled from '@emotion/styled'

// import {css} from '@emotion/core'

import {withProps} from 'recompose'

import withField from './withField'

type SelectProps = {
  meta: {
    touched: boolean
    error: boolean
  }
}

type Option = {value: string; label: string}

function getValue(value: string, options: Option[]) {
  if (!value) return null

  const item = options.find(x => x.value === value)

  return {
    value,
    label: item ? item.label : value
  }
}

const CustomSelect = withField(props => {
  const {options, value, onChange} = props

  const currentValue = options.filter(option => option.value === value)

  return (
    <Select<Option>
      {...props}
      className="custom-select"
      classNamePrefix="custom-select"
      value={currentValue}
      onBlur={() => {}}
      onChange={v => v && onChange(v.value)}
      isSearchable
      isClearable
    />
  )
})

export default props => (
  <CustomSelect {...props} float placeholder="กรุณาเลือก..." />
)
