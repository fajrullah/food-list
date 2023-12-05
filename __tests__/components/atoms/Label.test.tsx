/**
 * @jest-environment jsdom
 */
import Label from '@/components/atoms/Label'
import { render } from '@testing-library/react'

describe('Label component', () => {
  it('it should render a label', () => {
    const testLabel = 'Test label'
    
    const { getByText } = render(<Label label={testLabel} />)

    const paragraphElement = getByText(testLabel);

    const computedStyle = window.getComputedStyle(paragraphElement);

    expect(paragraphElement).toBeInTheDocument();
  
    expect(computedStyle.textTransform).toBe('capitalize');
  })

  it('it should have class', () => {
    const testLabel = 'Test label'
    
    const { getByText } = render(<Label label={testLabel} />)

    const paragraphElement = getByText(testLabel);

    const computedStyle = window.getComputedStyle(paragraphElement);
  
    expect(computedStyle.textTransform).toBe('capitalize');
  })

})
