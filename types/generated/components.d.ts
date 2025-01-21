import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperianBlockSection extends Schema.Component {
  collectionName: 'components_experian_block_sections';
  info: {
    displayName: 'Block Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    block_background_color: Attribute.String & Attribute.DefaultTo<'#0f1e3d'>;
    button_width: Attribute.Integer & Attribute.DefaultTo<280>;
    button_text: Attribute.String & Attribute.DefaultTo<'Start Experian Boost'>;
  };
}

export interface ExperianTextSectionA extends Schema.Component {
  collectionName: 'components_experian_text_section_as';
  info: {
    displayName: 'Text Section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experian.block-section': ExperianBlockSection;
      'experian.text-section-a': ExperianTextSectionA;
    }
  }
}
