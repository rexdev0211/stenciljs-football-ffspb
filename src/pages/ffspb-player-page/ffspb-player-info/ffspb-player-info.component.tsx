import { Component, Host, h, Prop } from '@stencil/core';
import { envState, Player } from 'ftb-models';
@Component({
  tag: 'ffspb-player-info',
  styleUrl: 'ffspb-player-info.component.scss',
  shadow: false,
})
export class FfspbPlayerInfo {
  @Prop() player: Player;

  render() {
    return (
      <Host class={envState.platform == 'web' ? 'desktop' : 'mobile'}>
        <ffspb-card>
          <ffspb-card-head>Информация</ffspb-card-head>
          <ffspb-card-content class="person-card">
            <ftb-player-photo player={this.player} />
            <table>
              <tr>
                <td>Лига:</td>
                <td>AFL Moscow</td>
              </tr>
            </table>
          </ffspb-card-content>
        </ffspb-card>
      </Host>
    );
  }
}
