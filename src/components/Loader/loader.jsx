import { ColorRing } from 'react-loader-spinner';
import { LodeWrapper } from './loaderStyled';

const Loader = () => {
  return (
    <LodeWrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LodeWrapper>
  );
};

export default Loader;
