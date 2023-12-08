/**
 * @jest-environment jsdom
 */
import Label from '@/components/atoms/Label';
import { render } from '@testing-library/react';

describe('Label component', () => {
  it('it should render a label', () => {
    const testLabel = 'test label';

    const { getByText } = render(<Label label={testLabel} />);

    const paragraphElement = getByText(testLabel);

    expect(paragraphElement).toBeInTheDocument();
  });
});
