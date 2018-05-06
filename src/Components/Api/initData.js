import { IP } from '../../constant';

const url = `http://${IP}/livecodereactnative`;

const initData = () => (
    fetch(url) //eslint-disable-line
    .then(res => res.json())
);

export default initData;
