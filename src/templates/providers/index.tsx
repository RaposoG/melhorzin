import React from 'react';

interface IAllProvidersProps {
  with: Array<React.ElementType>;
  children: React.ReactNode;
}

export const AllProviders = ({
  with: Providers,
  children
}: IAllProvidersProps) => {
  return (
    <React.Fragment>
      {Providers.reduce(
        (AccProviders, Provider) => (
          <Provider>{AccProviders}</Provider>
        ),
        children
      )}
    </React.Fragment>
  );
};
