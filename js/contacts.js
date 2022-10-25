const customers = [
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
  {
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Inactive",
  },
];

const btnCustomers = document.querySelector('[data-action="customers"]');

btnCustomers.addEventListener("click", buttonClick);

function buttonClick() {
  const list = document.querySelector(".customers");
  list.innerHTML = "";

  list.insertAdjacentHTML(
    "beforeend",
    `
      <div class="customers-conteiner">
        <div>
          <h2 class="customers-head">All Customers</h2>
          <p class="customers-active">Active Members</p>
        </div>

        <div class="search-form">
          <svg class="input_icon" width="24" height="24">
            <use href="./img/symbol-defs.svg#search-1"></use>
          </svg>
          <input
            class="input"
            type="text"
            name="searchQuery"
            autocomplete="off"
            placeholder="Search"
          />
        </div>
      </div>

      <table class="table">
        <thead class="table-head">
          <tr>
            <th class="table-tittle">Customer Name</th>
            <th class="table-tittle">Company</th>
            <th class="table-tittle">Phone Number</th>
            <th class="table-tittle">Email</th>
            <th class="table-tittle">Country</th>
            <th class="table-tittle">Status</th>
          </tr>
        </thead>
       
        <tbody class="table-body"></tbody>
        
      </table>
      <div class="head-pagination">
      <p class="pagination-tittle">Showing data 1 to 8 of  256K entries</p>
      <div class="pagination">
  <a class="inctive"href="#">&laquo;</a>
  <a class="active"href="#">1</a>
  <a class="inctive" href="#">2</a>
  <a class="inctive"href="#">3</a>
  <a class="inctive"href="#">4</a>
  <a class="inctive"href="#">...</a>
  <a class="inctive"href="#">40</a>
  <a class="inctive"href="#">&raquo;</a>
</div>
      </div>
    `
  );
  const customersEl = customers
    .map(
      (el) =>
        `
    <tr>
      <td>${el.CustomerName}</td>
      <td>${el.Company}</td>
      <td>${el.PhoneNumber}</td>
      <td>${el.Email}</td>
      <td>${el.Country}</td>
      <td><button type="button" data-action="chekbox" class="table-button">${el.Status}</button></td>
    </tr>
 `
    )
    .join("");
  console.log(customersEl);
  const tableList = document.querySelector(".table-body");
  tableList.insertAdjacentHTML("beforeend", customersEl);
  const btnStatus = document.querySelectorAll('[data-action="chekbox"]');
  btnStatus.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener("click", function (e) {
      if (e.target.textContent === "Inactive") {
        btn.textContent = "Active";
        btn.classList.remove("table-button");
        btn.classList.add("table-button-active");
      } else {
        btn.textContent = "Inactive";
        btn.classList.remove("table-button-active");
        btn.classList.add("table-button");
      }
    });
  });
}
inputText.classList.remove("valid");
inputText.classList.add("invalid");
