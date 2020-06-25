import React from 'react';
import { uniqueId } from 'lodash';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useTranslation } from 'react-i18next';

const TimeLine = (props) => {
  const { t } = useTranslation();
  const { activity } = props;
  return (
    <section className="timeline_wrapper">
      <h3>{t('timeline')}</h3>
      <Timeline lineColor="#40589A">
        {activity.map(el => (
          <TimelineItem
            key={uniqueId()}
            dateText={el.date}
            dateInnerStyle={{
              background: '#40589A',
              color: '#FFF',
            }}
            bodyContainerStyle={{
              textAlign: 'left',
              color: '#000',
            }}
          >
            {el.description}
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default TimeLine;
