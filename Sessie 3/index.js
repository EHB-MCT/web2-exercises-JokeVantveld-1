let promise = await fetch(api.edamam.com/api/recipes/v2);

if (response.ok) {
    let json = await response.json();

} else {
    alert("HTTP-Error: " + response.status );
}