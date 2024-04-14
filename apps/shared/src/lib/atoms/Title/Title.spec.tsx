import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('Title', () => {
  it('should render successfully', () => {
    const { container } = render(<Title text="Title" />);

    expect(container).toBeTruthy();
  });

  it('should render a h1 element with the provided text', () => {
    const text = 'Hello World';
    const customStyle = 'custom-style';

    const { container } = render(
      <Title text={text} customStyle={customStyle} />
    );

    const title = screen.getByTestId('title');
    expect(container.textContent).toEqual(text);
    expect(title?.getAttribute('class')).toContain(customStyle);
  });
});
