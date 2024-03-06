import { formErrorAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $fg = cssVar('form-error-color');

const baseStyleText = defineStyle({
  [$fg.variable]: `#d80027`,
  color: $fg.reference,
  mt: '2',
  fontSize: 'sm',
  lineHeight: 'normal',
});

const baseStyleIcon = defineStyle({
  marginEnd: '0.5em',
  [$fg.variable]: `#d80027`,
  color: $fg.reference,
});

const baseStyle = definePartsStyle({
  text: baseStyleText,
  icon: baseStyleIcon,
});

export const formErrorStyles = defineMultiStyleConfig({
  baseStyle,
});
