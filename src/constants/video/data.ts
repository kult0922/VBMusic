import L01 from './20180310';
import L02 from './20180317';
import L03 from './20180325';
import L04 from './20180506';
import L05 from './20180602';
import L06 from './20180707';
import L07 from './20180818';
import L08 from './20180924';
import L09 from './20181031';
import L10 from './20181224';
import L11 from './20181231';
import L12 from './20190420';
import L13 from './20190731';
import L14 from './20190812';
import L15 from './20190916';
import L16 from './20191224';
import L17 from './20200214';
import L18 from './20200313';
import L19 from './20200508';
import L20 from './20200731';
import L21 from './20201125';
import L22 from './20201224';
import L23 from './20210409';
import L24 from './20210824';
import L25 from './20211203';
import L26 from './20220324';
import L27 from './20220503';
import L28 from './20220812';
import L29 from './20221224';
import L30 from './20230530';

const List: Array<Content> = L01.concat(
  L02,
  L03,
  L04,
  L05,
  L06,
  L07,
  L08,
  L09,
  L10,
  L11,
  L12,
  L13,
  L14,
  L15,
  L16,
  L17,
  L18,
  L19,
  L20,
  L21,
  L22,
  L23,
  L24,
  L25,
  L26,
  L27,
  L28,
  L29,
  L30,
);
// const List: Array<Content> = L1;

const videoKey2index = new Map<string, number>();
const videoKeys = new Set<string>([]);

for (let i = 0; i < List.length; i++) {
  const id = List[i].url.split('/').slice(-1)[0];
  videoKey2index.set(id, i);
  videoKeys.add(id.split('=')[0] + '=');
}

export { List, videoKey2index, videoKeys };
