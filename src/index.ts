import { NgModule } from '@angular/core';
import { NgRedux } from './components/ng-redux';
import { DevToolsExtension } from './components/dev-tools';
import { select } from './decorators/select';

@NgModule({
  providers: [NgRedux, DevToolsExtension]
})
export class  NgReduxModule {}

export {
  NgRedux,
  DevToolsExtension,
  select,
}
