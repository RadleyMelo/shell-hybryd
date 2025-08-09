import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export const productsListStandaloneProviders: EnvironmentProviders[] = [
  importProvidersFrom(BrowserModule),
];
