import "./style.scss";
import { Months, Weeks } from "./date";

const daysEl = document.querySelector(".days")! as HTMLElement;
const chevrons = document.querySelectorAll(".icons i")!;

let date = new Date();
// 年,月
let [currentYear, currentMonth] = [date.getFullYear(), date.getMonth()];

/* --------------------functions------------------------------ */

function renderYearAndMonth() {
  const el = document.querySelector(".current-date")! as HTMLElement;
  el.innerHTML = `${currentYear}年${Months[currentMonth]}`;
}

// render days
function renderDays() {
  // 获取到这个月的1号是星期几
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  // 获取到前一个月的总天数
  let lastDateOfPreMonth = new Date(currentYear, currentMonth, 0).getDate();
  // 获取这个月总共的天数
  let totalDateOfCurrentMonth = new Date(
    currentMonth,
    currentMonth + 1,
    0
  ).getDate();
  // 获取这个月最后一天是星期几
  // let lastDayOfCurrentMonth = new Date(
  //   currentYear,
  //   currentMonth,
  //   totalDateOfCurrentMonth
  // ).getDay();

  let liTag = "";
  let count = 42;
  // 前一个月处理好了
  for (let i = 1; i < firstDayOfMonth; i++, count--) {
    liTag += `<li class="inactive">${lastDateOfPreMonth - i + 1}</li>`;
  }

  // 当前月很容易
  for (let i = 1; i <= totalDateOfCurrentMonth; i++, count--) {
    let active =
      currentYear === new Date().getFullYear() &&
      currentMonth === new Date().getMonth() &&
      i === new Date().getDate();
    liTag += `<li class="${active ? "active" : ""}">${i}</li>`;
  }

  // 处理下一个月
  for (let i = 1; i <= count; i++) {
    liTag += `<li class="inactive">${i}</li>`;
  }

  daysEl.innerHTML = liTag;
}

// render weeks
function renderWeeksTitle() {
  const weeksEl = document.querySelector(".weeks")! as HTMLElement;
  let liTag = "";

  for (const week of Weeks) {
    liTag += `<li>${week}</li>`;
  }
  weeksEl.innerHTML = liTag;
}

function renderCalendar() {
  renderYearAndMonth();
  renderWeeksTitle();
  renderDays();
}

chevrons.forEach((chevron) => {
  chevron.addEventListener("click", (e) => {
    let target = e.target as HTMLElement;
    if (target) {
      currentMonth =
        target.id === "left-chevron" ? currentMonth - 1 : currentMonth + 1;

      if (currentMonth < 0 || currentMonth > 11) {
        // create a new date of current year and month
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear();
        currentMonth = date.getMonth();
      } else {
        date = new Date();
      }
      renderCalendar();
    }
  });
});

renderCalendar();
