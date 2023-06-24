const apiRequest = async (url = '', OptionsObj  = null, errMsg = null ) => {
    try {
        const response = await fetch(url, OptionsObj);
        if(!response.ok)throw Error("please reload the app")
        
    } catch (error) {
        errMsg = error.message;
        
    }finally {
        return errMsg;
    }

}

export default apiRequest;