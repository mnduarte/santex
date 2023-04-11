import { Dot, LoadingWrapper } from './styles';

interface LoadingProps {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingProps) => (
  <LoadingWrapper>
    {loading && (
      <>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </>
    )}
  </LoadingWrapper>
);
