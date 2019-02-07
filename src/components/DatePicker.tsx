import React, {ComponentType} from 'react'
import {DatePicker} from 'antd'

import 'antd/lib/date-picker/style/css'

import {TextInput} from './Input'
import withField from './withField'

import {withFocus} from '../core/util'
import moment from 'moment'

const CustomDatePicker = (props: any) => (
  <DatePicker
    className="custom-date-picker"
    onChange={m => props.onChange(m.format('YYYY-MM-DD'))}
    value={moment(props.value)}
  />
)

export default withField(CustomDatePicker)
