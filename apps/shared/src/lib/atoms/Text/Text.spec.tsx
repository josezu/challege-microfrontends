import { render, screen } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  it('should render successfully', () => {
    const { container } = render(<Text text="text" />);

    expect(container).toBeTruthy();
  });

  it('should render a p element with the provided text', () => {
    const text = 'Hello World';
    const customStyle = 'custom-style';

    const { container } = render(
      <Text text={text} customStyle={customStyle} />
    );

    const textElement = screen.getByTestId('text');
    expect(container.textContent).toEqual(text);
    expect(textElement?.getAttribute('class')).toContain(customStyle);
  });
});
