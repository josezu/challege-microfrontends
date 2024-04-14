import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { container } = render(<Card text="text" srcImage="image.png" />);

    expect(container).toBeTruthy();
  });

  it('should render a card component with an image and text', () => {
    const text = 'Sample text';
    const srcImage = 'sample-image.jpg';
    const customStyle = 'custom-style';
    const type = 'sample-type';

    const { getByTestId } = render(
      <Card
        text={text}
        srcImage={srcImage}
        customStyle={customStyle}
        type={type}
      />
    );

    const cardElement = getByTestId('card');
    const imageElement = getByTestId('image');
    const textElement = getByTestId('text');

    expect(cardElement).toBeDefined();
    expect(imageElement).toBeDefined();
    expect(textElement).toBeDefined();
  });
});
