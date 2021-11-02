import { html, TemplateResult, customElement, property } from 'lit-element';
import { storeCounter } from './store';
import { MobxLitElement } from '@adobe/lit-mobx';

// create a mobx observable

// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class MyElement extends MobxReactionUpdate(LitElement)`
@customElement('my-element')
class MyElement extends MobxLitElement {
  private counter = storeCounter;

  // any observables accessed in the render method will now trigger an update
  public render(): TemplateResult {
    return html`
            Count is ${this.counter.count}
            <br />
            <button @click=${this.incrementCount}>Add</button>
        `;
  }

  public firstUpdated() {
    // you can update in first updated
    this.counter.increment(); // value is now 1
  }

  private incrementCount() {
    // and you can trigger change in event callbacks
    this.counter.increment(); // value is now n + 1
  }
}
