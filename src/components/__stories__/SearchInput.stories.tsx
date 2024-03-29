import React from 'react';

import { SearchInput, PrimaryButton, DefaultButton } from '..';

export default {
  title: 'SearchInput',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Base = () => <SearchInput isLoading={false} />;

export const Loading = () => <SearchInput isLoading={true} />;

export const Placeholder = () => <SearchInput isLoading={true} placeholder="search" />;

export const WithButton = () => (
  <div className="field has-addons">
    <SearchInput className="is-expanded" isLoading={true} placeholder="search" />
    <div className="control">
      <PrimaryButton>Search</PrimaryButton>
    </div>
  </div>
);

export const WithCancelButton = () => (
  <div className="field has-addons">
    <SearchInput className="is-expanded" isLoading={true} placeholder="search" />
    <div className="control ">
      <DefaultButton className="is-light">Cancel</DefaultButton>
    </div>
  </div>
);
