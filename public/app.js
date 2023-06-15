async function JSONdata () {
    const response = await fetch('/people');
    const data = await response.json();
    console.log(data);
}
JSONdata();