import { Component, Host, h, Prop } from '@stencil/core';
import { envState, Player } from 'ftb-models';
@Component({
  tag: 'ffspb-player-params',
  styleUrl: 'ffspb-player-params.component.scss',
  shadow: false,
})
export class FfspbPlayerParams {
  @Prop() player: Player;

  render() {
    return (
      <Host class={envState.platform == 'web' ? 'desktop' : 'mobile'}>
        <ffspb-card>
          <ffspb-card-head>Характеристики</ffspb-card-head>
          <ffspb-card-content></ffspb-card-content>
        </ffspb-card>
      </Host>
    );
  }
}
