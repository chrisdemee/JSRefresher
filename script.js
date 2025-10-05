const underground = [
    "che",
    "osamason",
    "1oneam",
    "xaviersobased",
    "prettifun",
    "autumn",
    "boolymon",
    "summrs",
    "nettspend",
    "yuke",
]
// alphabetical order
underground.sort((a, b) => a.localeCompare(b));

underground.forEach((e, i) => {
    document.getElementById("output").innerHTML += `<li>${i + 1}. ${e}</li>`;
});