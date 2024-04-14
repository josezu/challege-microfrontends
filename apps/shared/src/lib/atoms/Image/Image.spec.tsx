import { render, screen } from '@testing-library/react';

import Image from './Image';

describe('Image', () => {
  it('should render successfully', () => {
    const { container } = render(<Image src="image.png" />);

    expect(container).toBeTruthy();
  });

  it('should render an img element with the provided src and alt attributes', () => {
    const src = 'image.png';
    const alt = 'Image';
    const customStyle = 'custom-image';

    render(<Image src={src} alt={alt} customStyle={customStyle} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeDefined();
    expect(imgElement.getAttribute('src')).toBe(src);
    expect(imgElement.getAttribute('alt')).toBe(alt);
    expect(imgElement.getAttribute('class')).toContain(customStyle);
  });
});
