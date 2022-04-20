import { defineStore } from 'pinia'

export const useCityStore = defineStore({
  id: 'city',
  state: () => ({
    isShow: false,
    search: '',
    city: [
      {
        "name": "台北市",
        "en": "Taipei City",
        "id": "TPE"
        },
      {
        "name": "基隆市",
        "en": "Keelung City",
        "id": "KLU"
        },
      {
        "name": "新北市",
        "en": "New Taipei City",
        "id": "TPH"
        },
      {
        "name": "連江縣",
        "en": "Lienchiang County",
        "id": "LNN"
        },
      {
        "name": "宜蘭縣",
        "en": "Yilan County",
        "id": "ILN"
        },
      {
        "name": "新竹市",
        "en": "Hsinchu City",
        "id": "HSC"
        },
      {
        "name": "新竹縣",
        "en": "Hsinchu County",
        "id": "HSH"
        },
      {
        "name": "桃園市",
        "en": "Taoyuan City",
        "id": "TYC"
        },
      {
        "name": "苗栗縣",
        "en": "Miaoli County",
        "id": "MAL"
        },
      {
        "name": "台中市",
        "en": "Taichung City",
        "id": "TXG"
        },
      {
        "name": "彰化縣",
        "en": "Changhua County",
        "id": "CWH"
        },
      {
        "name": "南投縣",
        "en": "Nantou County",
        "id": "NTO"
        },
      {
        "name": "嘉義市",
        "en": "Chiayi City",
        "id": "CYI"
        },
      {
        "name": "嘉義縣",
        "en": "Chiayi County",
        "id": "CHY"
        },
      {
        "name": "雲林縣",
        "en": "Yunlin County",
        "id": "YLH"
        },
      {
        "name": "台南市",
        "en": "Tainan City",
        "id": "TNN"
        },
      {
        "name": "高雄市",
        "en": "Kaohsiung City",
        "id": "KHH"
        },
      {
        "name": "澎湖縣",
        "en": "Penghu County",
        "id": "PEH"
        },
      {
        "name": "金門縣",
        "en": "Kinmen County",
        "id": "KMN"
        },
      {
        "name": "屏東縣",
        "en": "Pingtung County",
        "id": "IUH"
        },
      {
        "name": "台東縣",
        "en": "Taitung County",
        "id": "TTT"
        },
      {
        "name": "花蓮縣",
        "en": "Hualien County",
        "id": "HWA"
    }]
  }),
  actions: {
    getCity () {
      fetch('https://api.github.com/repos/connectshark/taiwan-city-name/contents/taiwan-city.json?ref=main', {
        headers: {
          Accept: 'application/vnd.github.v3.raw'
        }
      })
      .then(res => res.json())
      .then(res => {
        this.city = res
      })
      .catch(() => {
        alert('警告')
      })
    }
  },
  getters: {
    filterAllCity () {
      return this.search !== '' ? this.city.filter(city => city.name.includes(this.search) || city.en.toLowerCase().includes(this.search.toLowerCase())) : []
    }
  }
})
