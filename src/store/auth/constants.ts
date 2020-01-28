import { createFeatureSelector } from '@ngrx/store';
import { User } from 'models/auth';

export interface AuthModuleState {
  user: User;
}

export const namespace = '[Auth]';
export const featureName = 'auth';

export const getAuthModuleState = createFeatureSelector<AuthModuleState>(featureName);
