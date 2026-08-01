    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("monthYear");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const themeToggle = document.getElementById("themeToggle");
    const birthdayList = document.getElementById("birthdayList");

    let currentDate = new Date();

    // Month is 1–12 for readability
    const birthdays = [
      
      { name: "BTS Debut Anniversary", month: 6, day: 13, icon: "🎉" },  
      { name: "ARMY Anniversary", month: 7, day: 9, icon: "💜" },
      { name: "UN Speech Anniversary", month: 9, day: 24, icon: "🌍" },
      { name: "RM", month: 9, day: 12, icon: "🍰"},
      { name: "Jin", month: 12, day: 4, icon: "🍰"},
      { name: "SUGA", month: 3, day: 9, icon: "🍰"},
      { name: "j-hope", month: 2, day: 18, icon: "🍰"},
      { name: "Jimin", month: 10, day: 13, icon: "🍰"},
      { name: "V", month: 12, day: 30, icon: "🍰"},
      { name: "Jungkook", month: 9, day: 1, icon: "🍰"},
      { name: "BTS at White House", month: 31, day: 5, icon: "🇺🇸"},
    ];

    const festaEvents = [];
    for (let d = 1; d <= 30; d++) {
    festaEvents.push({ name: "BTS Festa", month: 6, day: d, icon: "💜" });
    }

    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth(); // 0–11

      // Header text
      monthYear.textContent = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      // Remove old days (keep day-name headers)
      const oldDays = calendar.querySelectorAll(".day");
      oldDays.forEach((d) => d.remove());

      // Compute month layout
      const firstDay = new Date(year, month, 1).getDay(); // 0–6
      const lastDate = new Date(year, month + 1, 0).getDate(); // 28–31

      // Empty slots before first day
      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.classList.add("day");
        calendar.appendChild(empty);
      }

      // Days
      const today = new Date();
      for (let d = 1; d <= lastDate; d++) {
        const dayEl = document.createElement("div");
        dayEl.classList.add("day");

        // Day number
        const num = document.createElement("div");
        num.classList.add("num");
        num.textContent = d;
        dayEl.appendChild(num);

        // Birthday tags (support multiple on same day)
        const tags = document.createElement("div");
        tags.classList.add("tags");

        const matches = birthdays.filter((b) => b.day === d && b.month === month + 1);

        matches.forEach((b) => {
          const tag = document.createElement("span");
          tag.classList.add("tag");
          tag.innerHTML = `${b.name} ${b.icon}`;
          dayEl.title = (dayEl.title ? dayEl.title + " • " : "") + `${b.name} Birthday`;
          tags.appendChild(tag);
        });

        // Festa 💜 tag for June (month = 5 because JS months are 0–11)
        if (month === 5) {
          const festaTag = document.createElement("span");
          festaTag.classList.add("tag");
          festaTag.textContent = "💜"; 
          dayEl.title = (dayEl.title ? dayEl.title + " • " : "") + "BTS Festa";
          tags.appendChild(festaTag);
        }

        if (matches.length || month === 5) {
          dayEl.appendChild(tags);
        }

        if (matches.length) {
          dayEl.appendChild(tags);
        }

        dayEl.addEventListener("click", () => { 
            const clickedDate = new Date(year, month, d); 
            const dayName = clickedDate.toLocaleDateString("en-US", { weekday: "long" }); 
            const fullDate = clickedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); 
            document.getElementById("dateDetails").textContent = `${dayName}, ${fullDate}`; 
        });

        // Today highlight
        if (
          d === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          dayEl.classList.add("today");
        }

        calendar.appendChild(dayEl);
      }

      // Update the birthday list for the visible month
      renderBirthdayList(month + 1);

      // 🔹 Default: show today’s date in dateDetails 
      const dayName = today.toLocaleDateString("en-US", { weekday: "long" }); 
      const fullDate = today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", }); 
      document.getElementById("dateDetails").textContent = `${dayName}, ${fullDate}`;
    }

    function renderBirthdayList(visibleMonth) {
      const monthBirthdays = birthdays
        .filter((b) => b.month === visibleMonth)
        .sort((a, b) => a.day - b.day);

      birthdayList.innerHTML = "";

      if (monthBirthdays.length === 0) {
        birthdayList.innerHTML = `<li>No birthdays this month.</li>`;
        return;
      }

      monthBirthdays.forEach((b) => {
        const li = document.createElement("li");
        const date = new Date(2000, b.month - 1, b.day).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        });
      // Create a span for icon with vertical line 
      const iconSpan = document.createElement("span");
      iconSpan.classList.add("icon-line"); // Assign event type class for color 
      if (b.icon === "🍰") {
        iconSpan.classList.add("birthday-line"); // pink 
        } else 
      if (b.icon === "🎉" || b.icon === "💜") { 
        iconSpan.classList.add("anniversary-line"); // yellow/purple 
        } else 
        { iconSpan.classList.add("event-line"); // default blue 
        } iconSpan.textContent = b.icon; 
          li.appendChild(iconSpan); 
          li.append(` ${b.name} — ${date}`); 
          birthdayList.appendChild(li);
      });
    }

    // Navigation
    prevBtn.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });

    const monthSelect = document.getElementById("monthSelect");
    const yearSelect = document.getElementById("yearSelect");

    // Populate dropdowns once
    const months = [...Array(12).keys()].map(m => new Date(2000,m).toLocaleString("en",{month:"long"}));
    months.forEach((m,i)=> {
    let opt = document.createElement("option");
    opt.value=i; opt.textContent=m;
    monthSelect.appendChild(opt);
    });
    const thisYear = new Date().getFullYear();
    for(let y=thisYear-10;y<=thisYear+10;y++){
    let opt=document.createElement("option");
    opt.value=y; opt.textContent=y;
    yearSelect.appendChild(opt);
    }

    // Hook dropdowns
    monthSelect.onchange=()=>{currentDate.setMonth(parseInt(monthSelect.value));renderCalendar();}
    yearSelect.onchange=()=>{currentDate.setFullYear(parseInt(yearSelect.value));renderCalendar();}


    // Dark theme toggle
    function applyTheme(){
    const dark=localStorage.getItem("theme")==="dark";
    document.body.classList.toggle("dark",dark);
    themeToggle.textContent=dark?"☀️ Light":"🌙 Dark";
    }
    applyTheme();

    themeToggle.onclick=()=>{
    const dark=document.body.classList.toggle("dark");
    localStorage.setItem("theme",dark?"dark":"light");
    themeToggle.textContent=dark?"☀️ Light":"🌙 Dark";
    };

    // Initial render
    renderCalendar();

    document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowLeft"){currentDate.setMonth(currentDate.getMonth()-1);renderCalendar();}
    if(e.key==="ArrowRight"){currentDate.setMonth(currentDate.getMonth()+1);renderCalendar();}
    if(e.key==="Enter"){themeToggle.click();}
    });
