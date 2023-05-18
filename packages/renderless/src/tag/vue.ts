/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import { handleClose, handleClick } from './index'

export const api = ['state', 'handleClose', 'handleClick']

export const renderless = (props, { reactive, computed }, { emit, parent }) =>{
  const state = reactive({
    type: computed(() => props.theme || props.type),
    show: true,
    selected: false
  })

  const api = {
    handleClose: handleClose({ emit, props, state }),
    handleClick: handleClick({ emit, props, parent, state })
  }

  return Object.assign(api, { state })
}