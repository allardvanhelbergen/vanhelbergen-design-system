import React from 'react';
import {markdown, TypeSpecimen} from 'catalog';
import * as tokens from '@vanhelbergen/design-tokens/build/js/variables';

export default () => markdown`
  # Typography

  ## Headings
  ${<TypeSpecimen 
    single 
    headings={[
      tokens.SizeFontLarge, 
      tokens.SizeFontMedium, 
    ]} 
    color={tokens.ColorBaseGrayDark}
  />}
  
  ## Paragraph
  ${<TypeSpecimen 
    kafka
    paragraphs={[`${tokens.SizeFontMedium}/2rem`]} 
    color={tokens.ColorBaseGrayDark}
  />}

  ${<TypeSpecimen 
    kafka
    paragraphs={[`${tokens.SizeFontSmall}/2rem`]} 
    color={tokens.ColorBaseGrayDark}
  />}
`;
