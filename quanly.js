document
  .getElementById("infoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value;
    const mssv = document.getElementById("mssv").value;
    const nhiemvu = document.getElementById("nv").value;
    const han = document.getElementById("date").value;
    const ghichu = document.getElementById("note").value;

    const tableBody = document.querySelector("#resultTable tbody");

    const row = `
        <tr>
            <td>${mssv}</td>
            <td>${name}</td>
            <td>${nhiemvu}</td>
            <td>${han}</td>
            <td>${ghichu}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
    document.getElementById("infoForm").reset();
  });
