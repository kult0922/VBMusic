/*
import L5 from './20200731';
import L4 from './20210409';
import L3 from './20210824';
import L2 from './20211203';
*/
import L1 from './20220324';
// const List: Array<Content> = L1.concat(L2).concat(L3).concat(L4).concat(L5);
const List: Array<Content> = L1;

const videoKey2index = new Map<string, number>();
const videoKeys = new Set<string>([]);

for (let i = 0; i < List.length; i++) {
  const id = List[i].url.split('/').slice(-1)[0];
  videoKey2index.set(id, i);
  videoKeys.add(id.split('=')[0] + '=');
}

export { List, videoKey2index, videoKeys };
