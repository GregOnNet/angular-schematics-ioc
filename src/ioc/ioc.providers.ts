import '@abraham/reflection';
import { ReflectiveInjector } from 'injection-js';
import { AngularCli, AngularCliConfiguration } from '../lib';

export const providers = ReflectiveInjector.resolveAndCreate([
  AngularCli,
  AngularCliConfiguration
]);
