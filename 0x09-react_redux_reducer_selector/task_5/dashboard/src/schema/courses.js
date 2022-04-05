import { normalize, schema } from 'normalizr';

// adds isSelected property to for every new notification object in data
const coursesProcessStrategy = (value) => {
    return {
      ...value,
      isSelected: false
    }
}

const courses = new schema.Entity('courses', {}, {
  processStrategy: coursesProcessStrategy
})

function coursesNormalizer (data) {
  const normalizedData = normalize(data, [courses]);
  return ( normalizedData.entities.courses );
}

export { coursesNormalizer };
