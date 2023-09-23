import { Action } from 'redux';

export interface ReduxAction<Payload = any, Error = any, Meta = any> extends Action {
  payload?: Payload;
  error?: Error;
  meta?: Meta;
}