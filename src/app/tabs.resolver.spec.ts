import { TestBed } from '@angular/core/testing';

import { TabsResolver } from './tabs.resolver';

describe('TabsResolver', () => {
  let resolver: TabsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TabsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
