fetch(`api/data/v9.0/organizations`)
    .then((r) => r.json())
    .then((json) => {
        const organization = json.value[0]
        const orgId = organization.organizationid

        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "OData-MaxVersion": "4.0",
            "OData-Version": "4.0",
        }        const payload = `{
                "appointmentricheditorexperience": "true"
            }`        return fetch(`api/data/v9.0/organizations(${orgId})`, {
            headers,
            method: "PATCH",
            body: payload,
        })
    })
    .then((result) => console.log(result))