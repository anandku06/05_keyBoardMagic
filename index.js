const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
    console.log(e);
    
  insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>Code</th>
                <th>Type</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? "Space" : e.key}</td>
                <td>${e.code}</td>
                <td>${e.type}</td>
            </tr>
        </table>
    </div>
    `;
});
