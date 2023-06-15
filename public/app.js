async function JSONdata() {
  try {
    const response = await fetch("/people");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
JSONdata();
