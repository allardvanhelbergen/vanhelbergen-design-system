import React from 'react';
import {markdown, ColorPaletteSpecimen, ColorSpecimen} from 'catalog';
import * as tokens from '@vanhelbergen/design-tokens/build/js/variables';

console.log('tokens :', tokens);

export default () => markdown`
  # Colours

  ## Greys
  ${<ColorPaletteSpecimen 
    colors={[
      {name: 'Gray light', value: tokens.ColorBaseGrayLight},
      {name: 'Gray medium', value: tokens.ColorBaseGrayMedium},
      {name: 'Gray dark', value: tokens.ColorBaseGrayDark},
    ]} 
  />}

  ## Red
  ${<ColorSpecimen name='ColorBaseRed' value={tokens.ColorBaseRed} />}

  ## Green
  ${<ColorSpecimen name='ColorBaseRed' value={tokens.ColorBaseGreen} />}
`;
