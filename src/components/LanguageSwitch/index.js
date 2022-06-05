import React, { useState } from 'react';
import { find, findIndex } from 'lodash';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import { languages } from './consts';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const recentLanguage = localStorage.getItem('lang');
  const [language, setLanguage] = useState(
    find(languages, ({ id }) => id == recentLanguage) || languages[0]
  );

  const changeLanguage = () => {
    const currentLanguageIndex = findIndex(
      languages,
      ({ id }) => id === language.id
    );
    const newLanguage =
      languages[(currentLanguageIndex + 1) % languages.length];
    i18n.changeLanguage(newLanguage.id);
    setLanguage(newLanguage);

    localStorage.setItem('lang', newLanguage.id);
  };

  return (
    <Box
      component="img"
      src={language.flag}
      onClick={changeLanguage}
      sx={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        border: (theme) => `${theme.spacing(1)} solid ${theme.palette.white}`,
        cursor: 'pointer',
      }}
    />
  );
};

export default LanguageSwitch;
