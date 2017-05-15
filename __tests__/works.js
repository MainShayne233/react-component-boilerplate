import React from 'react'
import renderer from 'react-test-renderer'
import { Counter } from '../src/index.js'

describe('Counter', () => {
  it ('Renders the counter component', () => {
    const component = renderer.create(<Counter/>)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
