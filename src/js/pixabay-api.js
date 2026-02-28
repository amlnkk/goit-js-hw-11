import axios from 'axios';

export function getImagesByQuery(query) {
    
    const apikey = "54827848-4d245c6c3f15ee40bb4986a25";

    return axios.get('https://pixabay.com/api/', {
      params: {
        key: apikey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        },
    })
    .then(response => {
    return response.data
});

}