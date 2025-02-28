import { format, parseISO } from 'date-fns';
import { jobs } from '@/src/data';
import { getDurationString } from '@/src/utils';

export const Career = () => {
  return (
    <>
      {jobs.map(
        (
          { company, companyUrl, jobTitle, location, startDate, endDate },
          index
        ) => (
          <article style={{ marginBottom: 40 }} key={index} aria-label='career'>
            <h3>{jobTitle}</h3>
            <p style={{ margin: 0 }}>
              <a href={companyUrl} target='_blank' rel='noreferrer'>
                {company}
              </a>
              <span> • {location}</span>
            </p>
            <p style={{ margin: 0 }}>
              <span>{format(parseISO(startDate), 'LLL yyyy')}</span>
              <span> – </span>
              <span>
                {endDate ? format(parseISO(endDate), 'LLL yyyy') : 'Present'}
              </span>
              <span> • </span>
              <span>{getDurationString(startDate, endDate)}</span>
            </p>
          </article>
        )
      )}
    </>
  );
};
