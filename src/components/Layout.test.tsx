import { render } from '@testing-library/react'
import { Layout } from './Layout'

describe('Layout', () => {
  it('should render Layout correctly', () => {
    const { asFragment } = render(
      <Layout>
        <div>Test</div>
      </Layout>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
