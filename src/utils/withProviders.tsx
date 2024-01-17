export const withProviders = (...providers: any[]) => (
    WrappedComponent: React.FC
  ) => (props: Record<any, any>) =>
    providers.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, <WrappedComponent {...props} />);