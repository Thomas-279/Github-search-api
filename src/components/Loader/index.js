import React from 'react';
import { Loader as LoaderSUI } from 'semantic-ui-react';
import './style.scss';

const Loader = () => (
  <div className="loader">
    <LoaderSUI active>Loading</LoaderSUI>
  </div>
);

export default Loader;
