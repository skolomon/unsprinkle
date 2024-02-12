import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  let j2 = src.replace('.jpg', '@2x.jpg');
  let j3 = src.replace('.jpg', '@3x.jpg');
  let a = src.replace('.jpg', '.avif');
  let a2 = src.replace('.jpg', '@2x.avif');
  let a3 = src.replace('.jpg', '@3x.avif');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source
            type="image/avif"
            srcSet={`${a} 1x, ${a2} 2x, ${a3} 3x`}
          />
          <source
            type="image/jpeg"
            srcSet={`${src} 1x, ${j2} 2x, ${j3} 3x`}
          />
          <Image src={src} alt={alt} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`

`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
  object-position: center;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  & li:last-child {
    flex-shrink: revert;
  }
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 0;
`;

export default PhotoGridItem;
