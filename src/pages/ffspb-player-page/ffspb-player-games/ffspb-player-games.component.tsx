import { Component, Host, h, Prop } from '@stencil/core';
import { envState, Player } from 'ftb-models';
@Component({
  tag: 'ffspb-player-games',
  styleUrl: 'ffspb-player-games.component.scss',
  shadow: false,
})
export class FfspbPlayerGames {
  @Prop() player: Player;

  render() {
    return (
      <Host class={envState.platform == 'web' ? 'mobile' : 'desktop'}>
        <ffspb-card>
          <ffspb-card-head>Последние матчи</ffspb-card-head>
          <ffspb-card-content></ffspb-card-content>
        </ffspb-card>
      </Host>
    );
  }
}
