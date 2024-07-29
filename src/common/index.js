
const backenddomain="http://localhost:8080" 

const SummaryApi= {
    signUP:{
        url:`${backenddomain}/api/signup`,
        method:"POST",

    },
    signIn:{
        url:`${backenddomain}/api/signin`,
        method:"POST",


    },
    current_user:{
        url:`${backenddomain}/api/user-details`,
        method:"GET",
    },
    logout_user:{
        url:`${backenddomain}/api/userLogout`,
        method:"get"
    },
    allUser:{
        url:`${backenddomain}/api/all-user`,
        method:'get'
    },
    updateUser:{
        url:`${backenddomain}/api/update-user`,
        method:"POST",
    },
    uploadProduct:{
       url:`${backenddomain}/api/upload-product`,
       method:"POST" ,
    },
    allProduct:{
        url:`${backenddomain}/api/get-product`,
        method:"GET"
    },
    updateProduct:{
        url:`${backenddomain}/api/update-product`,
        method:'POST'
    }

}

export default SummaryApi