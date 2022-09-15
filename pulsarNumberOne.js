import { FASTElement, html, css } from '@microsoft/fast-element';

const template = html`<a>this is a custom element!</a>`;
const styles = css``;
const converter = {};

export class PulsarNumberOne extends FASTElement {
  static definition = {
    name: 'pulsar-number-one',
    template,
    styles,
    attributes: [
      'value', // same attr/prop
      { attribute: 'some-attr', property: 'someAttr' }, // different attr/prop
      { property: 'count', converter }, // derive attr; add converter
    ],
  };

  value = '';
  someAttr = '';
  count = 0;
}

FASTElement.define(PulsarNumberOne);
