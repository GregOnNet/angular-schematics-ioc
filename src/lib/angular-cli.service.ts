import { Injectable } from 'injection-js';
import { AngularCliConfiguration } from './angular-cli-configuration.service';

@Injectable()
export class AngularCli {
  apps = [
    {
      name: 'flights-app',
      root: 'src/app'
    }
  ];

  constructor(public _configuration: AngularCliConfiguration) {}
}
