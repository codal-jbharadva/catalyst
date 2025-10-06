import {
  Checkbox,
  Color,
  Group,
  Image,
  Link,
  List,
  RichText,
  Slot,
  TextInput,
} from '@makeswift/runtime/controls'

import { runtime } from '~/lib/makeswift/runtime'
import { ImageGrid } from '.'

runtime.registerComponent(ImageGrid, {
  type: 'imageGrid',
  label: 'Section / Image Grid',
  icon: 'layout',
  props: {
    showHeaderButton: Checkbox({
      label: 'Show Header Button?',
      defaultValue: true,
    }),
    headerTitle: RichText({
      mode: RichText.Mode.Block,
    }),
    slot: Slot(),
    backgroundColor: Color({
      label: 'Background Color',
      defaultValue: '#FAF7ED'
    }),
    imageCards: List({
      label: 'Image Cards',
      type: Group({
        label: 'Image Card',
        preferredLayout: Group.Layout.Popover,
        props: {
          image: Image({
            label: 'Image',
            format: Image.Format.URL,
          }),
          imageAltText: TextInput({
            label: 'Image Alt Text',
            defaultValue: '',
          }),
          ctaText: TextInput({
            label: 'CTA Text',
          }),
          ctaLink: Link({
            label: 'CTA Link',
          }),
        },
      }),
      getItemLabel(item) {
        return item?.ctaText ?? 'Image Card'
      },
    }),
  },
})
