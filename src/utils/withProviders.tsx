import React from "react";

type ProviderType = React.FC<any>; // Adjust this based on your actual provider types

export const withProviders =
  (...providers: ProviderType[]) =>
  (WrappedComponent: React.FC<any>) =>
  (props: React.ComponentProps<typeof WrappedComponent>) => {
    return providers.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, <WrappedComponent {...props} />);
  };
