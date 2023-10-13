import axios from "axios";

const instace = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "932c6beb-48e7-4801-a0a3-2ad7ddba21dd"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instace
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuth() {
        return instace
            .get('auth/me')
            .then(response => response.data);
    }
}

export const followAPI = {
    follow(id) {
        if (id) {
            return instace
                .post(`follow/${id}`)
                .then(response => response.data);
        }
    }
}

export const unfollowAPI = {
    unfollow(id) {
        if (id) {
            return instace
                .delete(`follow/${id}`)
                .then(response => response.data);
        }
    }
}
