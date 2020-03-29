document.addEventListener("DOMContentLoaded", function() {
  d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vQjWd46EvBh89oFdZgxCXkGOPx4op-jX7oDWMlF9_b0IY9vcCmUTMkr87nxZyZwLY_2Fv79Dwg_NIWk/pub?output=csv').then(function (data) {
    var html = '';
    console.log(data);
    data.forEach(function (d) {
      html += `<h2>${d["Person / Organization"]}</h2>`
      html += `<h3>${d["Number"]}</h3>`
      html += `<strong>${d["Area"]} in ${d["Taluka"]}</strong>`
      html += `<p>${d["Items"]}</p>`
    })
    document.getElementById('data-container').innerHTML = html;
  });
});
