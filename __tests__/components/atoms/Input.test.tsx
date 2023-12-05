/**
 * @jest-environment jsdom
 */
import Input from '@/components/atoms/Input'
import { render, screen } from '@testing-library/react'

describe('Label component', () => {
  it('it should render a input with placeholder', () => {
    const testLabel = 'Enter restaurant name'
    
    render(<Input placeholder={testLabel} />)

    const inputElement = screen.getByPlaceholderText(testLabel);

    expect(inputElement).toBeInTheDocument();
  
  })
  
})
