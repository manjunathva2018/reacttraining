import * as _ from 'lodash';

export const Pagination = (array, pageNo = 1, size = 10) =>{
    if(!array || array.length <=0) return array;
    return _.chunk(array, size)[pageNo - 1];
}

export const pageCount = (array, size = 10) => {
    if(!array || array.length <= 0) return 0;
    return Math.ceil(array.length / size);
}


