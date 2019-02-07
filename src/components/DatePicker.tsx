import React, {ComponentType} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'

import 'react-day-picker/lib/style.css'

import {TextInput} from './Input'
import withField from './withField'

import {withFocus} from '../core/util'
import {DayPickerInputProps} from 'react-day-picker/types/props'
import {DayModifiers} from 'react-day-picker/types/common'
import moment from 'moment'

const Input = withFocus(TextInput)

type DayChangeFn = (
  day: Date,
  DayModifiers: DayModifiers,
  dayPickerInput: DayPickerInput
) => void

type DatePickerProps = {
  component: ComponentType
  onChange: DayChangeFn
} & DayPickerInputProps

const DatePicker = (props: any) => (
  <DayPickerInput
    {...props}
    component={Input}
    inputProps={props}
    onDayChange={props.onChange}
    required
  />
)

export default withField(DatePicker)
