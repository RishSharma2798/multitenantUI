

export class TableService {
     API_BASE_URL =  'https://your-api-url.com/create'
   deleteRecord = (Id) => {
    return fetch(`https://your-api-url.com/create/table/delete/${Id}`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            if (res.status === 200) {
                return res.json()
            }
            throw res.json();
        })
        .catch(e => {
            console.error('deleteRecord', e);
            return [];
        })
}

createRecord = async (data) => {
    return fetch(`https://your-api-url.com/create/table/create`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'  },
            body: data
        }).then((res) => {
            if (res.status === 200) {
                return res.json()
            }
            throw res.json();
        })
        .catch(e => {
            console.error('createRecord', e);
            return [];
        })
}

}