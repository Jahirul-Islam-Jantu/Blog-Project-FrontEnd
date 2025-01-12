import axios from 'axios';


const baseURL = "https://basic-blog.teamrabbil.com/api";
export async function categoriesItem (){
    let res =  await axios.get(`${baseURL}/post-categories`, {})


    if (res.status === 200) {
        return res.data
    }else {
        return []
    }

}

export async function blogListItem (){
    let res =  await axios.get(`${baseURL}/post-newest  `, {})


    if (res.status === 200) {
        return res.data
    }else {
        return []
    }

}

export async function postByCategory (id){
    let res =  await axios.get(`${baseURL}/post-list/${id}` , {})


    if (res.status === 200) {
        return res.data
    }else {
        return []
    }

}

export async function detailsPostItem (id){
    let res =  await axios.get(`${baseURL}/post-details/${id}` , {})

    if (res.status === 200) {
        return res.data
    }else {
        return []
    }
}