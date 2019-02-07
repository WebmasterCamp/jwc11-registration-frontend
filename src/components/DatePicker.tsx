import React from 'react'
import {DatePicker} from 'antd'
import moment from 'moment'
import 'moment/locale/th'

import 'antd/lib/date-picker/style/css'

import withField from './withField'

const CustomDatePicker = (props: any) => (
  <DatePicker
    className="custom-date-picker"
    onChange={m =>
      props.onChange(m ? m.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'))
    }
    value={moment(props.value)}
    format="LL"
    locale="th"
  />
)

export default withField(CustomDatePicker)
