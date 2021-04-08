import React from 'react';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';
import { Input, Button } from '@material-ui/core';
import './formSubscribe.css'
function Footer() {
  const {t} = useTranslation();

  return (
    <footer>

      <h3>{t('Mantenha-se actualizado, faça já a sua subscrição e receba todas as actualizações diretamente no seu e-mail')}</h3>

      <div className="links">
      <span>
      <Input className="input-top" placeholder="Primeiro Nome" inputProps={{ 'aria-label': 'description' }} />
      <Input className="input-top" placeholder="Último Nome" inputProps={{ 'aria-label': 'description' }} />
      <Input className="input-top" placeholder="E-Mail" inputProps={{ 'aria-label': 'description' }} />
      <Button variant="contained" color="primary">
        Subscrever-se
      </Button>
      </span>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
