async function FetchData(link, content, method, body) {

    const fetchData = {
        headers: {
            "Content-Type" : content,
        },
        method: method,
    };

    if (body) {
        fetchData.body = JSON.stringify(body);
    }

    return await fetch(link, fetchData).then((res) => res.status === 200 ? res.json() : res.status === 201 ?  console.log("Created " + res.status) : res.status === 404 ? console.log("Source not available: " + res.status) : console.log("Forbidden: " + res.statusText));
}

export default FetchData;
