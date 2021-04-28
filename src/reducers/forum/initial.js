import faker from 'faker';
import { v4 } from 'uuid';


const initial = {}

Array(10).fill().forEach(() => {
  const id = v4();

  initial[id] = {
    title: faker.name.findName(),
    body: faker.lorem.paragraphs(5, '\n\n'),
    id,
    likes: 0
  }
});


export default initial;