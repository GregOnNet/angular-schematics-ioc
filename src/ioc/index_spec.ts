import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { providers } from './ioc.providers';
import { AngularCli } from '../lib/angular-cli.service';


const collectionPath = path.join(__dirname, '../collection.json');


describe('ioc', () => {
  it('should add my sample file', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('ioc', {}, Tree.empty());

    expect(tree.files).toContain('/src/app/flights-app.ts');
  });

  it('should use injection-js', () => {
    const cli = providers.get(AngularCli);
    expect(cli).toBeDefined();
  })
});
