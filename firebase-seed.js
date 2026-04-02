// firebase-seed.js
// Запусти один раз: node firebase-seed.js
// npm install firebase

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const cfg = {
  apiKey:"AIzaSyCCzyMi_QRO5kxH_KY6hwpZP5ezASC30lQ",
  authDomain:"project-magnet-0-12-0.firebaseapp.com",
  databaseURL:"https://project-magnet-0-12-0-default-rtdb.firebaseio.com",
  projectId:"project-magnet-0-12-0",
  storageBucket:"project-magnet-0-12-0.firebasestorage.app",
  messagingSenderId:"806168706834",
  appId:"1:806168706834:web:e13093dd8940641508bdcb"
};

const app = initializeApp(cfg);
const db  = getDatabase(app);

const data = {
  // ── Устройства ────────────────────────────────────────────────────────────
  devices: {
    samsung: {
      G991B: { name:"Galaxy S21 (Exynos)", codename:"G991B" },
      A33x:  { name:"Galaxy A33 5G",       codename:"A33x"  },
      a013f: { name:"Samsung A01 Core",    codename:"a013f" },
    },
    xiaomi:  { nuwa:      { name:"Xiaomi 13 Pro",  codename:"nuwa"      } },
    google:  { cheetah:   { name:"Pixel 7 Pro",    codename:"cheetah"   } },
    oneplus: { lemonadep: { name:"OnePlus 9 Pro",  codename:"lemonadep" } },
    other:   { j606f:     { name:"Lenovo Tab P11", codename:"j606f"     } },
  },

  // ── Android ROM ───────────────────────────────────────────────────────────
  roms: {
    nuwa: {
      item1: { name:"RisingOS", android:"15", build:"RP1A.200720.011", status:"STABLE",
               url:"https://drive.google.com/drive/u/1/folders/1eOFXaq10H-DfKw2Yu1fa9oiLDA6-1t0t", by_admin:true }
    },
    cheetah: {
      item1: { name:"LineageOS", android:"16", build:"AP2A.240805.005", status:"OFFICIAL",
               url:"https://download.lineageos.org/devices/cheetah/builds", by_admin:true }
    },
    lemonadep: {
      item1: { name:"RealmeUI 7", android:"16", build:"16.0.2.402", status:"STABLE",
               url:"https://sourceforge.net/projects/coloros-port/files/RealmeUI7.0/", by_admin:true }
    },
    j606f: {
      item1: { name:"LineageOS 18.1", android:"11", build:"RP1A.200720.011", status:"STABLE",
               url:"https://sourceforge.net/projects/andyyan-gsi/files/lineage-18.x/", by_admin:true }
    },
  },

  // ── Recovery (Android) ────────────────────────────────────────────────────
  recoveries: {
    nuwa: {
      item1: { name:"TWRP 3.7.0",    type:"TWRP",      version:"3.7.0", status:"STABLE",
               url:"https://dl.twrp.me/nuwa/", by_admin:true },
      item2: { name:"OrangeFox R11.1",type:"OrangeFox", version:"R11.1",status:"STABLE",
               url:"https://orangefox.download/device/nuwa", by_admin:true },
    },
    cheetah: {
      item1: { name:"TWRP 3.7.0", type:"TWRP", version:"3.7.0", status:"STABLE",
               url:"https://dl.twrp.me/cheetah/", by_admin:true },
    },
    lemonadep: {
      item1: { name:"TWRP 3.7.0",    type:"TWRP",      version:"3.7.0", status:"STABLE",
               url:"https://dl.twrp.me/lemonadep/", by_admin:true },
      item2: { name:"OrangeFox R11.1",type:"OrangeFox", version:"R11.1",status:"STABLE",
               url:"https://orangefox.download/device/lemonadep", by_admin:true },
    },
    j606f: {
      item1: { name:"TWRP 3.6.0", type:"TWRP", version:"3.6.0", status:"UNOFFICIAL",
               url:"https://xdaforums.com/t/recovery-twrp-lenovo-tab-p11.4222222", by_admin:true },
    },
  },

  // ── Stock (Android) ───────────────────────────────────────────────────────
  stock: {
    nuwa: {
      item1: { name:"HyperOS 1.0", android:"14", build:"OS1.0.4.0.UMCMIXM",
               region:"Global", status:"LATEST",
               url:"https://xiaomifirmwareupdater.com/archive/hyperos/nuwa/", by_admin:true },
    },
    cheetah: {
      item1: { name:"Android 14 QPR3", android:"14", build:"AP2A.240805.005",
               region:"Global", status:"LATEST",
               url:"https://developers.google.com/android/images#cheetah", by_admin:true },
    },
    lemonadep: {
      item1: { name:"OxygenOS 13.1", android:"13", build:"13.1.0.591(EX01)",
               region:"Global", status:"LATEST",
               url:"https://www.oneplus.com/global/support/softwareupgrade", by_admin:true },
    },
    j606f: {
      item1: { name:"ZUI 13", android:"11", build:"ZUI_13_P_A",
               region:"Global", status:"LATEST",
               url:"https://lenovomobilesupport.lenovo.com/us/en/solutions/ht500310", by_admin:true },
    },
  },

  // ── Samsung ───────────────────────────────────────────────────────────────
  samsung: {
    roms: {
      G991B: {
        item1: { name:"DerpFest",       android:"13", build:"G991BXXU5EWA1", bootloader:"G991BXXU5EWA1",
                 status:"STABLE", url:"https://drive.google.com/drive/folders/1f0fg24P5oRCRQpTw1bWKkVtcjx5t1HJe", by_admin:true },
        item2: { name:"UN1CA 3.0.6",   android:"16", build:"G991BXXS9EXD1", bootloader:"G991BXXS9EXD1",
                 status:"STABLE", url:"https://drive.google.com/file/d/1lqWntZNqmpbXtqGywDiqvwbFHCBW_NqL/view", by_admin:true },
      },
      A33x: {
        item1: { name:"UN1CA 3.0.6",   android:"16", build:"A336BXXS5DXD1", bootloader:"A336BXXS5DXD1",
                 status:"STABLE", url:"https://drive.google.com/file/d/1A7vgMRdHB9pJVQeTLAblz7DetPwr6K2Z/view", by_admin:true },
        item2: { name:"Infinity-X 3.8",android:"16", build:"A336BXXS5DXD2", bootloader:"A336BXXS5DXD2",
                 status:"STABLE", url:"https://github.com/akifakif32/OTA/releases/tag/3.8", by_admin:true },
      },
      a013f: {
        item1: { name:"OneUI 2.5 Port", android:"10", build:"A013FXXU3BVD1", bootloader:"A013FXXU3BVD1",
                 status:"PORT", url:"https://drive.google.com/file/d/11rZOVzY7cqJ2KHNlUxChlA2qcQGIoqBN", by_admin:true },
      },
    },
    recoveries: {
      G991B: {
        item1: { name:"TWRP 3.7.0",    type:"TWRP",      version:"3.7.0", status:"STABLE",
                 url:"https://dl.twrp.me/o1s/", by_admin:true },
        item2: { name:"OrangeFox R11.1",type:"OrangeFox", version:"R11.1",status:"STABLE",
                 url:"https://orangefox.download/device/o1s", by_admin:true },
      },
      A33x: {
        item1: { name:"TWRP 3.7.0", type:"TWRP", version:"3.7.0", status:"UNOFFICIAL",
                 url:"https://xdaforums.com/t/recovery-unofficial-twrp-for-samsung-galaxy-a33.4567890", by_admin:true },
      },
      a013f: {
        item1: { name:"TWRP 3.6.2", type:"TWRP", version:"3.6.2", status:"UNOFFICIAL",
                 url:"https://xdaforums.com/t/recovery-twrp-samsung-a01-core.4111111", by_admin:true },
      },
    },
    stock: {
      G991B: {
        item1: { name:"One UI 6.1", android:"14", build:"G991BXXS9EXD1", bootloader:"G991BXXS9EXD1",
                 region:"Global", status:"LATEST", url:"https://samfrew.com/model/SM-G991B/", by_admin:true },
        item2: { name:"One UI 5.1", android:"13", build:"G991BXXS7EWC3", bootloader:"G991BXXS7EWC3",
                 region:"Global", status:"STABLE", url:"https://samfrew.com/model/SM-G991B/", by_admin:true },
      },
      A33x: {
        item1: { name:"One UI 6.0", android:"14", build:"A336BXXS5DXD1", bootloader:"A336BXXS5DXD1",
                 region:"Global", status:"LATEST", url:"https://samfrew.com/model/SM-A336B/", by_admin:true },
      },
      a013f: {
        item1: { name:"One UI Core 2.5", android:"11", build:"A013FXXU3BVD1", bootloader:"A013FXXU3BVD1",
                 region:"Global", status:"LATEST", url:"https://samfrew.com/model/SM-A013F/", by_admin:true },
      },
    },
  },
};

async function seed() {
  console.log("Uploading to Firebase Realtime Database...");
  await set(ref(db, 'flashtool'), data);
  console.log("✅ Done! All data uploaded to flashtool/");
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
