import http from '../../utils/request'

export const getdata=()=>{
    return http.get('/home/getData')
}