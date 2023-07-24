const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const linkA = document.querySelectorAll("a");
for (let i = 0; i < linkA.length; i++) {
  linkA[i].setAttribute("class", "italic");
  linkA[0].textContent = "Servisler";
  linkA[1].textContent = "Ürünler";
  linkA[2].textContent = "Vizyon";
  linkA[3].textContent = "Özellikler";
  linkA[4].textContent = "Hakkımızda";
  linkA[5].textContent = "İletişim";
}
const img12 = document.getElementById("logo-img");
img12.setAttribute("src", "http://localhost:9000/img/logo.png");

const baslik = document.querySelector(".cta-text> h1");
baslik.textContent = "Bu DOM Mükemmel";

const butTon = document.querySelector(".cta-text > button");
butTon.textContent = "Başlayın";

const img13 = document.getElementById("cta-img");
img13.setAttribute("src", "http://localhost:9000/img/cta.png");

const baslik2 = document.querySelector(
  "main-content > top-content > text-content > h4"
);
baslik2.textContent = "Özellikler";

const paragraf1 = document.querySelector(
  "main-content > top-content >text-content > p"
);
paragraf1.textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,  in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const baslik3 = document.querySelector("top-content > text-content > h4");
baslik3.textContent = "Hakkında";
