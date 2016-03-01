
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Label, Checkbox } from '../src'

const renderer = TestUtils.createRenderer()

describe('Checkbox', () => {
  let tree, label

  beforeEach(() => {
    renderer.render(<Checkbox name='test' label='Checkbox'/>)
    tree = renderer.getRenderOutput()
    label = tree.props.children
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Checkbox')
  })

  it('should have a Label', () => {
    expect(label.type).toEqual(Label)
  })

  it('should have an input', () => {
    expect(label.props.children[0].type).toEqual('input')
    expect(label.props.children[0].props.type).toEqual('checkbox')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Checkbox name='test_checkbox' label='Test' style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})
