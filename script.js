const sections = document.querySelectorAll('section');

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
});

const translations = {
    ru: {
        title: "Ибрахим & Фериде",
        name1: "Ибрахим",
        name2: "Фериде",
        invite: "Приглашение на свадьбу",
        date: "Дата",
        dateValue: "10 октября 2026",
        time: "Время",
        place: "Место",
        ayahTitle: "Аят о любви и милосердии",
        ayahText: "«Среди Его знамений — то, что Он создал для вас жен из вас самих, чтобы вы находили в них покой, и установил между вами любовь и милость»",
        duaTitle: "Дуа за молодых",
        duaText: "О Аллах, благослови их обоих, благослови их союз и объедини их в благе.",
        footer: "Ibrahim & Feride — 2026",
        calendar: "Добавить в календарь",
        map: "Открыть карту",
        address: "Zugspitzstrasse 11, 84539 Ampfing, Bayern, Deutschland"
    },

    de: {
        title: "Ibrahim & Feride",
        name1: "Ibrahim",
        name2: "Feride",
        invite: "Hochzeitseinladung",
        date: "Datum",
        dateValue: "10. Oktober 2026",
        time: "Zeit",
        place: "Ort",
        ayahTitle: "Vers über Liebe und Barmherzigkeit",
        ayahText: "„Zu Seinen Zeichen gehört, dass Er für euch Gattinnen aus euch selbst erschuf, damit ihr bei ihnen Ruhe findet, und Er hat zwischen euch Liebe und Barmherzigkeit gesetzt.“",
        duaTitle: "Bittgebet für das Paar",
        duaText: "O Allah, segne beide, segne ihre Verbindung und vereine sie im Guten.",
        footer: "Ibrahim & Feride — 2026",
        calendar: "Zum Kalender hinzufügen",
        map: "Karte öffnen",
        address: "Zugspitzstrasse 11, 84539 Ampfing, Bayern, Deutschland"
    },

    tr: {
        title: "İbrahim & Feride",
        name1: "İbrahim",
        name2: "Feride",
        invite: "Düğün davetiyesi",
        date: "Tarih",
        dateValue: "10 Ekim 2026",
        time: "Saat",
        place: "Yer",
        ayahTitle: "Sevgi ve merhamet ayeti",
        ayahText: "“O’nun ayetlerinden biri de, size kendi cinsinizden eşler yaratması, aranızda sevgi ve merhamet var etmesidir.”",
        duaTitle: "Çift için dua",
        duaText: "Allahım, onları bereketlendir, birliklerini hayırlı kıl ve aralarını hayırla birleştir.",
        footer: "Ibrahim & Feride — 2026",
        calendar: "Takvime ekle",
        map: "Haritayı aç",
        address: "Zugspitzstrasse 11, 84539 Ampfing, Bayern, Deutschland"
    }
};

function setLang(lang) {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
const names = document.querySelectorAll(".name, .amp");

names.forEach(el => {
    el.style.animation = "none";
    el.offsetHeight; // перезапуск анимации
    el.style.animation = "";
});

        document.body.style.opacity = "1";
    }, 200);
}

window.addEventListener("load", () => {
    setLang("ru");

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("show");
        }, index * 500);
    });
});

sections.forEach((section, index) => {
    section.style.transitionDelay = (index * 0.2) + "s";
});