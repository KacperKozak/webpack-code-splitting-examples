import React from 'react';
import styles from './IPA.css';
import Flag from '../../components/Flag';
import Card from '../../components/Card';

const IPA = () => (
  <div className={styles.ipa}>
    <Card>
      <h3>IPA 1</h3>
      <Flag code="pl" />
    </Card>
    <Card>
      <h3>IPA 1</h3>
      <Flag code="de" />
    </Card>
    <Card>
      <h3>IPA 1</h3>
      <Flag code="ro" />
    </Card>
  </div>
);

export default IPA;
