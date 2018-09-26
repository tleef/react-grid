import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Grid from '../src/Grid'

test('Grid renders correctly', () => {
  const tree = renderer.create(
    <Grid container spacing={16}>
      <Grid item xs={12}/>
    </Grid>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})