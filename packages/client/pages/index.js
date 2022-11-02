import Script from 'next/script';
import { Home } from '../src/Components/index';

const HomePage = ({}) => {

  
  return (
    <>
      <Home />
      <>
        <Script src="https://cdn.jsdelivr.net/npm/@alch/alchemy-web3@latest/dist/alchemyWeb3.min.js" />
      </>
    </>
  )
}

export default HomePage;
