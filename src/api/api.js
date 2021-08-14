import axios from 'axios';



const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"f2c79364-2960-4dc0-acda-aeeb9000e191"
     }
});
export const usersAPI={
  getUsers(currentPage,pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data;
        });
 
 
    },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  

 },
 follow(userId) {
    return instance.post(`follow/${userId}`)
 
 },
getUserId(userId) {
  console.warn('old method.please,use profileAPI')
    return profileAPI.getUserId(userId);
    
 
 },

}
export const profileAPI={
  
getUserId(userId) {
    return instance.get(`profile/${userId}`)
    
 },
 getStatus(userId) {
  return instance.get(`profile/status/${userId}`)
 },
 updateStatus(status) {
  return instance.put('profile/status',{status:status});
 }

}
export const authAPI={
   me() {
   return instance.get(`auth/me`);
 
 },
 login(email,password,rememberMe=false) {
  return instance.post(`auth/login`,{email,password,rememberMe});

},
logout() {
  return instance.delete(`auth/login`);

},
}



      



 

