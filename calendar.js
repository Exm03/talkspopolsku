// calendar.js (обновлён)
(function () {
  'use strict';

  /* === YOUR LESSONS: редактируй этот объект ===
     icon: (опционально) — строка: emoji / inline SVG / текст
     iconUrl: (опционально) — относительный или абсолютный путь к картинке (приоритет выше icon)
  */
  const LESSONS = {
    "2026-02-01": { title: "[SŁUCH] Talent do języków to mit", 
      type: "new", 
      href: "lesson.html?id=2026-02-01", 
      videoId: "96gGoITaeG4", 
      vocabHref: "https://quizlet.com/pl/1137942144/1-talent-do-jezykow-to-mit-3-kroki-zeby-zostac-poliglota-piotr-kruk-tedxsgh-flash-cards/?i=235rwg&x=1qqt", 
      exercises: {
  B1: "https://docs.google.com/forms/d/1-O_R3QBtxhKg06s0ZbOp_nGal1U0zXmRGXjMU8UFKxk/edit?usp=drivesdk",
  B2: "https://docs.google.com/forms/d/1IEmXa4UKQV4zvmQHgJi0AvAKIMKU-wUiw0XpjCFFr1M/edit?usp=drivesdk",
  C1: "https://docs.google.com/forms/d/15XUZlZoG6waVUdxLu1PRLkdaqiu6Gmh4lNwMYyUDiko/edit",
  ALL: "https://docs.google.com/forms/d/1-GiAp0qTVyw36upl4qzLF5nrBP_hPhZMZMjjr15HsQA/edit?usp=drivesdk"
}, icon: "🎧" },
   
    "2026-02-03": { title: "[CZYT] Talent do języków to mit", type: "new", href: "lesson.html?id=2026-02-03", videoId: "96gGoITaeG4",   
      vocabHref: "https://quizlet.com/pl/1137942144/1-talent-do-jezykow-to-mit-3-kroki-zeby-zostac-poliglota-piotr-kruk-tedxsgh-flash-cards/?i=235rwg&x=1qqt",   
      exercises: {
  B1: "https://docs.google.com/forms/d/1APOjtBQ3e3rUpEuTed7IFLRWjFPkRg7qjqnO_kXsmZE/edit?usp=drivesdk",
  B2: "https://docs.google.com/forms/d/1E7fbMEZfCZ3a-7bbkWy6_TaKsh-EJqq30V6BgX8YHg4/edit?usp=drivesdk",
  C1: "https://docs.google.com/forms/d/1Qg1Irj6ydwBl20DYfVvmaHcDOpdQp8Ynlbikd-3-Czw/edit?usp=drivesdk",
  ALL: "https://docs.google.com/forms/d/11fHbasWVmXiu_aYOJpFi3JMmn9evgysJyskh9duDDzY/edit?usp=drivesdk"
}, icon: "📄" },
    "2026-02-05": { title: "[GRAM] Talent do języków to mit", type: "new", href: "lesson.html?id=2026-02-05", videoId: "96gGoITaeG4", vocabHref: "https://quizlet.com/pl/1137942144/1-talent-do-jezykow-to-mit-3-kroki-zeby-zostac-poliglota-piotr-kruk-tedxsgh-flash-cards/?i=235rwg&x=1qqt", exercises: {
  B1: "https://docs.google.com/forms/d/1clUhl_gDoC3ntq3-0JWSuxQqj4Y6PgFd32-m8nTpESc/edit?usp=drivesdk",
  B2: "https://docs.google.com/forms/d/1HLfcmRtEp1vwHgO5xgbeVfpn0oGJoupQYDP4CfONA0o/edit?usp=drivesdk",
  C1: "https://docs.google.com/forms/d/1mbw5TxVcBnikIgd37PyB6pibhIclMcdvBK5RRe58Y90/edit?usp=drivesdk",
  ALL: "https://docs.google.com/forms/d/1kndR7sRyWR79Fj5gA1Umoe9bQ2S5j0rYpxOY-z-V2FI/edit?usp=drivesdk"
}, icon: "📚" },
    "2026-02-07": { title: "[PIS] Talent do języków to mit", type: "new", href: "lesson.html?id=2026-02-07", videoId: "96gGoITaeG4", vocabHref: "https://quizlet.com/pl/1137942144/1-talent-do-jezykow-to-mit-3-kroki-zeby-zostac-poliglota-piotr-kruk-tedxsgh-flash-cards/?i=235rwg&x=1qqt",  exercises: {
  B1: "https://docs.google.com/forms/d/1_JrwAJijpr3EoxH6njJM_UQ4STHaZE6nVEisAMU8WsQ/edit?usp=drivesdk",
  B2: "https://docs.google.com/forms/d/1l621SvqqLUC5H3A0p81hKfE01HiNpjCdu9dusAUDf5w/edit?usp=drivesdk",
  C1: "https://docs.google.com/forms/d/1ycxcD9WfAX5fc-RnDLi0vg4BkfvuEIcXl9Ja-DzT3wY/edit?usp=drivesdk",
  ALL: "https://docs.google.com/forms/d/1ofZlJtKiVk1Ryr1XIwDtCML5vnh9y9HsAMRhVfdqWWM/edit?usp=drivesdk"
}, icon: "✍" },
    "2026-02-09": { title: "[SŁUCH] Cyfrowy obrzęk mózgu", type: "new", href: "lesson.html?id=2026-02-09", videoId: "rzwnYM0s1b4", vocabHref: "https://quizlet.com/pl/1141687235/2-cyfrowy-obrzek-mozgu-bartosz-dembinski-tedxaghuniversity-flash-cards/",  exercises: {
  B1: "https://forms.gle/5feRE5HWeCw4oFGc8",
  B2: "https://forms.gle/fw9Z84USE3S9P1PdA",
  C1: "https://forms.gle/3uYhzN5NdBGVCgc47",
  ALL: "https://forms.gle/zpjnw9yiCCZ2Y5Pv6"
}, icon: "🎧" },
    "2026-02-11": { title: "[CZYT] Cyfrowy obrzęk mózgu", type: "new", href: "lesson.html?id=2026-02-11", videoId: "rzwnYM0s1b4", vocabHref:"https://quizlet.com/pl/1141687235/2-cyfrowy-obrzek-mozgu-bartosz-dembinski-tedxaghuniversity-flash-cards/" , exercises: {
  B1: "https://forms.gle/Y9fMCUJfRD2QhPxU7",
  B2: "https://docs.google.com/forms/d/e/1FAIpQLSeSyXt9OPmgUVajqR-JKsABZucbzFUXHdIW0TvHcq9766qoZg/viewform?usp=publish-editor",
  C1: "https://docs.google.com/forms/d/e/1FAIpQLSfjZD87nO2M2O3Z2YVbh7LebrPZftMtsGJR_IKAl4Wa5shsVg/viewform?usp=publish-editor",
  ALL: "https://forms.gle/XbhKCnt8BcDb3x4Z7"
} , icon:"📄"},
    "2026-02-13": { title: "[GRAM] Cyfrowy obrzęk mózgu", type: "new", href: "lesson.html?id=2026-02-13", videoId: "rzwnYM0s1b4", vocabHref: "https://quizlet.com/pl/1141687235/2-cyfrowy-obrzek-mozgu-bartosz-dembinski-tedxaghuniversity-flash-cards/",  exercises: {
  B1: "https://docs.google.com/forms/d/e/1FAIpQLSfJ9glT1cFkGAIk8IvItcR4114KUsyL5zhdXTrR2rZXoKOdVA/viewform?usp=publish-editor ",
  B2: "https://docs.google.com/forms/d/e/1FAIpQLSf74NvaNGpm4LeUbVPka99uRq61hWC0TdqHj48ab1IZb-DH5A/viewform?usp=publish-editor",
  C1: "https://docs.google.com/forms/d/e/1FAIpQLSdm6tRNTlAejr5qnOhxdqpt6W2S_eARUCpxxzdjv1p1RJwxaQ/viewform?usp=publish-editor ",
  ALL: "https://docs.google.com/forms/d/e/1FAIpQLScUjhz7sUaP51Afm5IW7IkrNqWKKoNIMgaJF2eqOQCRoOYExw/viewform?usp=publish-editor "
}, icon: "📚" },
    "2026-02-15": { title: "[PIS] Cyfrowy obrzęk mózgu", type: "new", href: "lesson.html?id=2026-02-15", videoId: "rzwnYM0s1b4", vocabHref: "https://quizlet.com/pl/1141687235/2-cyfrowy-obrzek-mozgu-bartosz-dembinski-tedxaghuniversity-flash-cards/", exercises: {
  B1: "https://forms.gle/3gBEBixgayUsmoGe8 ",
  B2: "https://forms.gle/A45fBX5hUE5JQvdT7 ",
  C1: "https://forms.gle/QrELnsXyEU9EHapUA",
  ALL: "https://docs.google.com/forms/d/e/1FAIpQLSeKVqXSDYGVm2LfkJDtexS5gmz4Jjyutkmpj6zU5mYptrsWaw/viewform?usp=publish-editor"
}, icon: "✍" },
    "2026-02-17": { title: "[SŁUCH] FEMINA- TYWY", type: "new", href: "lesson.html?id=2026-02-09", videoId: "MYH2qGScEVk", vocabHref: "",  exercises: {
  B1: " ",
  B2: " ",
  C1: " ",
  ALL: " "
}, icon: "🎧" },
    "2026-02-19": { title: "[CZYT] FEMINA- TYWY", type: "new", href: "lesson.html?id=2026-02-11", videoId: "MYH2qGScEVk", vocabHref:"" , exercises: {
  B1: " ",
  B2: " ",
  C1: " ",
  ALL: " "
} , icon:"📄"},
    "2026-02-21": { title: "[GRAM] FEMINA- TYWY", type: "new", href: "lesson.html?id=2026-02-13", videoId: "MYH2qGScEVk", vocabHref: "",  exercises: {
  B1: " ",
  B2: " ",
  C1: " ",
  ALL: " "
}, icon: "📚" },
    "2026-02-23": { title: "[PIS] FEMINA- TYWY", type: "new", href: "lesson.html?id=2026-02-15", videoId: "MYH2qGScEVk", vocabHref: "", exercises: {
  B1: " ",
  B2: " ",
  C1: " ",
  ALL: " "
}, icon: "✍" },

  };
  /* ========================================= */

  // DOM
  const calendarGrid = document.getElementById('calendarGrid');
  const monthLabel = document.getElementById('monthLabel');
  const prevBtn = document.getElementById('prevMonth');
  const nextBtn = document.getElementById('nextMonth');
  const filterCheckbox = document.getElementById('filterNew');
  const showAllBtn = document.getElementById('showAll');
  const showAllLessonsBtn = document.getElementById('showAllLessons');

  // view month default (можешь поставить today)
  let viewYear = 2026;
  let viewMonth = 1; // февраль (0-based)
  let viewOnlyNew = filterCheckbox ? filterCheckbox.checked : false;

  // Вернёт ISO-дату (YYYY-MM-DD) для переданного Date в часовом поясе Poland
  function polandISODate(d = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Warsaw',
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(d);
  }

  function polandToday() {
    return polandISODate(new Date());
  }

  function formatMonthLabel(y, m) {
    const names = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];
    return `${names[m]} ${y}`;
  }

  function isoDate(y, m, d) {
    return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  }

  function isLessonWatched(id) {
    return localStorage.getItem(`lesson_${id}_watched`) === 'true';
  }

  function markLessonWatched(id) {
    try {
      localStorage.setItem(`lesson_${id}_watched`, 'true');
      localStorage.setItem(`lesson_${id}_lastViewed`, new Date().toISOString());
    } catch (e) {}
  }

  function openLesson(id, href, available, videoId, exe, vocabHref) {
    if (!available) {
      const msg = `Lekcja będzie dostępna ${id} (Strefa czasowa: Europa/Warszawa)`;
      alert(msg);
      return;
    }
    try {
      localStorage.setItem("loadData", JSON.stringify({ id, videoId, vocabHref, exercises: LESSONS[id].exercises, title: LESSONS[id] && LESSONS[id].title }));
    } catch (e) {}
    markLessonWatched(id);
    const dest = href || `lesson.html?id=${id}`;
    if (/^https?:\/\//.test(dest)) window.open(dest, '_blank', 'noopener');
    else window.location.href = dest;
  }

  function createLessonCard(dateKey, lesson, available, watched) {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    if (watched) card.classList.add('viewed');

    const iconWrap = document.createElement('div');
    iconWrap.className = 'lesson-icon-wrap';

    if (lesson.iconUrl) {
      const img = document.createElement('img');
      img.src = lesson.iconUrl;
      img.alt = '';
      img.className = 'lesson-icon-img';
      iconWrap.appendChild(img);
    } else if (lesson.icon) {
      const ic = document.createElement('div');
      ic.className = 'lesson-icon';
      ic.innerHTML = lesson.icon;
      iconWrap.appendChild(ic);
    } else {
      const ic = document.createElement('div');
      ic.className = 'lesson-icon';
      ic.textContent = '●';
      iconWrap.appendChild(ic);
    }

    if (!available) {
      const lock = document.createElement('div');
      lock.className = 'icon-locked';
      lock.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 8V7a5 5 0 10-10 0v1" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="8" width="18" height="13" rx="2" stroke="#fff" stroke-width="1.6" fill="rgba(0,0,0,0.2)"/></svg>';
      iconWrap.appendChild(lock);
      card.classList.add('locked');
    } else if (watched) {
      const done = document.createElement('div');
      done.className = 'icon-done';
      done.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      iconWrap.innerHTML = '';
      iconWrap.appendChild(done);
    }

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = lesson.title;

    const meta = document.createElement('div');
    meta.className = 'meta';
    if (lesson.tag) {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'tag';
      tagSpan.textContent = lesson.tag;
      meta.appendChild(tagSpan);
    }
    if (lesson.type === 'new' && !watched && available) {
      const dot = document.createElement('span');
      dot.className = 'red-dot';
      meta.appendChild(dot);
    }

    card.appendChild(iconWrap);
    card.appendChild(title);
    card.appendChild(meta);

    card.addEventListener('click', function (e) {
      e.stopPropagation();
      localStorage.setItem('calendar_lastOpenedLesson', dateKey);
      openLesson(dateKey, lesson.href, available, lesson.videoId, lesson.exe, lesson.vocabHref);
      setTimeout(() => renderCalendar(), 80);
    });

    return card;
  }

  function renderCalendar() {
    if (!calendarGrid) return;
    calendarGrid.innerHTML = '';
    if (monthLabel) monthLabel.textContent = formatMonthLabel(viewYear, viewMonth);

    const firstDay = new Date(viewYear, viewMonth, 1);
    const startWeekday = (firstDay.getDay() + 6) % 7; // 0 = Monday
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    for (let i = 0; i < startWeekday; i++) {
      const empty = document.createElement('div');
      empty.className = 'day empty';
      calendarGrid.appendChild(empty);
    }

    const todayPoland = polandToday();

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = isoDate(viewYear, viewMonth, day);
      const cell = document.createElement('div');
      cell.className = 'day';
      const num = document.createElement('div');
      num.className = 'num';
      num.textContent = day;
      cell.appendChild(num);

      const lesson = LESSONS[dateKey];

      if (lesson) {
        const available = dateKey <= todayPoland;
        const watched = isLessonWatched(dateKey);

        // если включён фильтр "новые", показываем только новые и доступные
        if (viewOnlyNew) {
          if (watched || !available) {
            // не показываем карточку
          } else {
            const card = createLessonCard(dateKey, lesson, available, watched);
            cell.appendChild(card);
          }
        } else {
          const card = createLessonCard(dateKey, lesson, available, watched);
          cell.appendChild(card);
        }
      }

      calendarGrid.appendChild(cell);
    }
  }

  // Navigation handlers (guarded)
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      viewMonth--;
      if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      renderCalendar();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      viewMonth++;
      if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      renderCalendar();
    });
  }

  if (filterCheckbox) {
    filterCheckbox.addEventListener('change', function (e) {
      viewOnlyNew = e.target.checked;
      renderCalendar();
    });
  }
  if (showAllBtn) showAllBtn.addEventListener('click', function () { viewOnlyNew = false; if (filterCheckbox) filterCheckbox.checked = false; renderCalendar(); });
  if (showAllLessonsBtn) showAllLessonsBtn.addEventListener('click', function () { viewOnlyNew = false; if (filterCheckbox) filterCheckbox.checked = false; renderCalendar(); });

  renderCalendar();
  setInterval(renderCalendar, 60 * 1000);

  // expose helpers
  window._LESSONS = LESSONS;
  window._markLessonWatched = markLessonWatched;
  window._polandToday = polandToday;

})();
