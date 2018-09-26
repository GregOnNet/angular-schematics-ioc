import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { providers } from './ioc.providers';
import { AngularCli } from '../lib';

export function ioc(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const cli: AngularCli = providers.get(AngularCli);
    const flightsApp = cli.apps[0];
    tree.create(`${flightsApp.root}/${flightsApp.name}.ts`, '');
    return tree;
  };
}
