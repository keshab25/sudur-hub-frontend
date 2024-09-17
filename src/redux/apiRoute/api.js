import axios from "axios";

const baseUrl = "http://localhost:4000/api/v1" 
const API = axios.create({
    baseURL: baseUrl,
});

//interceptors
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token")

    try {
        if(token){
            req.headers.Authorization = `Bearer ${token}`
        }
        
    } catch (error) {
        console.log(error)
        
    }
    return req
})
//user register
export const userRegister = (registerValue) => API.post("/register",registerValue);
//user login
export const userLogin = (loginValue)=> API.post("/login",loginValue);

//profile
export const userProfile = () => API.get("/single/user");

//update profile
export const updateProfile = (updateForm) => API.put("/update/user",updateForm);

//change password
export const changePassword = (passwordValue) => API.put("/change/password",passwordValue);
//get all products
export const getProducts = ()=>API.get("/all/products");
//get single product
export const getProduct = (id) => API.get(`/single/product/${id}`);

//admin all products(admin route)
export const allAdminProducts = ()=>API.get("/admin/all/products");
// add product
export const addProduct = (formData)=> API.post("/create/product",formData);

//delete product
export const deleteProduct = (id)=> API.delete(`/delete/product/${id}`);