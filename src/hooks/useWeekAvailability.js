import { useState } from 'react';
import { addWeeks, isMonday, previousMonday } from 'date-fns';
import { get, isNil } from 'lodash';
import { useQuery } from 'react-query';
import { getWeekAvailability, WEEK_AVAILABILITY_KEY } from 'consts/queries';
import formatWeekAvailability from 'utils/formatWeekAvailability';

const calculateStartOfCurrentWeek = () => {
  const today = new Date();

  return isMonday(today) ? today : previousMonday(today);
};

const calculateStartOfNeighborWeek = (startOfCurrentWeek, offset) => {
  return addWeeks(startOfCurrentWeek, offset);
};

const useWeekAvailability = (serviceId, enabled = true) => {
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState(
    calculateStartOfCurrentWeek()
  );

  const { data: weekData, isLoading } = useQuery(
    [WEEK_AVAILABILITY_KEY, serviceId, currentWeekStartDate],
    () => getWeekAvailability(serviceId, currentWeekStartDate),
    {
      refetchOnWindowFocus: false,
      enabled: !isNil(serviceId) && !isNil(currentWeekStartDate) && enabled,
    }
  );

  const changeWeek = (offset) => {
    const targetWeekStartDate = calculateStartOfNeighborWeek(
      currentWeekStartDate,
      offset
    );

    setCurrentWeekStartDate(targetWeekStartDate);
  };

  const weekAvailability = formatWeekAvailability(
    get(weekData, 'data'),
    currentWeekStartDate
  );

  return {
    isLoading,
    changeWeek,
    weekAvailability,
  };
};

export default useWeekAvailability;
