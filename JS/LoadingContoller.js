import { $ } from "./Utils.js";

const LoadingComponent = `<div class="loading">
<div class="loading-image">
  <div class="loading-beer"></div>
  <div class="loading-mug"></div>
</div>
<p class="loading-desc">보리를 재배하는 중...</p>
</div>`;

const LOADING_DESCRIPTIONS = [
  "보리를 재배하는 중...",
  "홉을 수확하는 중...",
  "케그를 세척하는 중...",
  "알맞는 안주를 찾아보는 중...",
  "맥주의 향을 음미하는 중...",
  "맥주를 담을 이쁜 컵을 찾는중...",
  "소주를 섞으려는 부장님을 멀리 보내는 중...",
  "맥주의 유통기한을 확인하는 중...",
  "맥주가 넘치지 않도록 따르는 중...",
];

export default class LoadingController {
  constructor() {}
  setLoading() {
    $("body").insertAdjacentHTML("beforeend", LoadingComponent);
    const idx = Math.floor(Math.random() * LOADING_DESCRIPTIONS.length);
    $(".loading-desc").textContent = LOADING_DESCRIPTIONS[idx];
  }
  redirect(result) {
    location.href = `./result.html?id=${result}`;
  }
}
