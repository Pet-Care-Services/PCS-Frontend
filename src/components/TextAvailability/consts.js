import { t } from 'i18next';

const getPeriodToLabelMap = () => ({
  WEEK: t('period.everyWeek'),
  MONTH: t('period.everyMonth'),
});

export { getPeriodToLabelMap };
