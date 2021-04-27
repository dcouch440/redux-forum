import faker from 'faker';
import { v4 } from 'uuid';


const initial = {}

Array(10).fill().forEach((u,i) => {
  const id = v4();

  initial[id] = {
    title: faker.name.findName(),
    body: faker.lorem.words(20),
    id
  }
});


export default initial;