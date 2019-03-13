import api from '../api';

// Handle the call to the API to preform get all the users.
export const getUsers = (data) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                api.get(`api/users/getUsers?pageNumber=${data.pageNumber}&top=${data.top}`).then((response) => {
                    resolve(response.data);

                }).catch((error) => {
                    console.log(error);
                    reject(error);
                });
            }, 1000);

        } catch (error) {
            reject(error);
        }
    });
};