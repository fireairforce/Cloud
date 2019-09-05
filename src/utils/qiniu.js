import qiniu from 'qiniu';
import { Qiniu } from '../../secret';

qiniu.conf.ACCESS_KEY = Qiniu.AK;
qiniu.conf.SECRET_KEY = Qiniu.SK;
const bucket = 'zoomdong';

export const getToken = () => {
    const putPolicy = new qiniu.rs.PutPolicy({
        scope: bucket
    })
    return putPolicy.uploadToken();
}