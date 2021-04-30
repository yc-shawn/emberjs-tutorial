import Application from 'emberjs-tutorial/app';
import config from 'emberjs-tutorial/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
