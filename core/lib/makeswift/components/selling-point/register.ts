import { runtime } from '~/lib/makeswift/runtime';
import { MSCard } from '../card/client';
import { SellingPoint } from './client';
import { Font, Group, Image, List, RichText, TextInput } from '@makeswift/runtime/controls';

runtime.registerComponent(SellingPoint, {
  type: 'SellingPoint',
  label: 'basic / Selling Point',
  icon: 'layout',
  props: {
    sellingGroup: List({
      label: 'Selling cards',
      // getItemLabel(item) {
      //     return item.title ?? "Selling card title"
      // },
      type: Group({
        label: 'Selling card',
        props: {
          icon: Image({ label: 'Image Icon' }),
          altText: TextInput({ label: 'Alt Text', defaultValue: '' }),
          title: RichText(),
          description: RichText({ mode: RichText.Mode.Block }),
        },
      }),
    }),
  },
});