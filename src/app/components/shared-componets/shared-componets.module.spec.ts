import { SharedComponetsModule } from './shared-componets.module';

describe('SharedComponetsModule', () => {
  let sharedComponetsModule: SharedComponetsModule;

  beforeEach(() => {
    sharedComponetsModule = new SharedComponetsModule();
  });

  it('should create an instance', () => {
    expect(sharedComponetsModule).toBeTruthy();
  });
});
