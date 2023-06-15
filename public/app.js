async function JSONdata() {
  try {
    const response = await fetch("https://deployment-from-scratch.onrender.com/");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
JSONdata();
