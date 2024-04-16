import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const onClick = jest.fn();

    const { container } = render(<Button text="text" onClick={onClick} />);

    expect(container).toBeTruthy();
  });

  it('should render a button element with provided text and custom styles', () => {
    const text = 'Click me';
    const customStyle = 'custom-button';
    const onClick = jest.fn();

    const { container } = render(
      <Button text={text} customStyle={customStyle} onClick={onClick} />
    );

    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeDefined();
    expect(container.textContent).toEqual(text);
    expect(buttonElement?.getAttribute('class')).toContain(customStyle);
  });
});
