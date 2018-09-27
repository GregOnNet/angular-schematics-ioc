import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { mock, SinonMock } from 'sinon';
import { providers } from './ioc.providers';
import { AngularCli } from '../lib/angular-cli.service';

describe('ioc', () => {
  let collectionPath: string;
  let runner: SchematicTestRunner;
  let testProviders: SinonMock;

  beforeAll(() => (collectionPath = join(__dirname, '../collection.json')));

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
  });

  it('should add the file provided', () => {
    const tree = runner.runSchematic('ioc', {}, Tree.empty());
    expect(tree.files).toContain('/src/app/flights-app.ts');
  });

  it('should add another file provided by a mocked service', () => {
    testProviders = mock(providers);
    
    testProviders.expects('get').withArgs(AngularCli).returns({
      apps: [{ name: 'books-app', root: 'projects/books' }]
    })
    
    const tree = runner.runSchematic('ioc', {}, Tree.empty());
    expect(tree.files).toContain('/projects/books/books-app.ts');
  });

  afterEach(() => testProviders && testProviders.verify())
});

describe('injection-js', () => {
  it('should use injection-js', () => {
    const cli = providers.get(AngularCli);
    expect(cli).toBeDefined();
  });
});
